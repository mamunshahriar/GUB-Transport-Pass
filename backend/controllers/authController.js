const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET || 'gub_secret_2025', { expiresIn: '7d' });

exports.register = async (req, res) => {
  try {
    const { name, studentId, department, email, phone, password, pickupPoint } = req.body;
    const exists = await User.findOne({ $or: [{ email }, { studentId }] });
    if (exists) return res.status(400).json({ message: 'Student ID or Email already registered.' });
    const user = await User.create({ name, studentId, department, email, phone, password });
    res.status(201).json({ token: generateToken(user._id, user.role), user: { id: user._id, name: user.name, studentId, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: 'Invalid credentials.' });
    res.json({ token: generateToken(user._id, user.role), user: { id: user._id, name: user.name, studentId: user.studentId, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

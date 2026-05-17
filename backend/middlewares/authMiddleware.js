const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.startsWith('Bearer') ? req.headers.authorization.split(' ')[1] : null;
  if (!token) return res.status(401).json({ message: 'Not authorized, no token.' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'gub_secret_2025');
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch {
    res.status(401).json({ message: 'Token invalid or expired.' });
  }
};

exports.adminOnly = (req, res, next) => {
  if (req.user?.role !== 'Admin') return res.status(403).json({ message: 'Admin access required.' });
  next();
};

exports.officerOnly = (req, res, next) => {
  if (!['Admin', 'TransportOfficer'].includes(req.user?.role))
    return res.status(403).json({ message: 'Officer access required.' });
  next();
};

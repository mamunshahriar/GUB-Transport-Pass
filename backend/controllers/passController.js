const Pass = require('../models/Pass');
const crypto = require('crypto');

const generatePassId = () => Math.floor(100000000 + Math.random() * 900000000).toString();
const encryptQR = (data) => Buffer.from(JSON.stringify(data)).toString('base64');

exports.applyPass = async (req, res) => {
  try {
    const { pickupPoint, routeId, semester } = req.body;
    const existing = await Pass.findOne({ user: req.user.id, status: { $in: ['Pending', 'Approved'] } });
    if (existing) return res.status(400).json({ message: 'You already have an active/pending pass.' });
    const validFrom = new Date();
    const validTo = new Date();
    validTo.setMonth(validTo.getMonth() + 5);
    const passId = generatePassId();
    const qrCodeData = encryptQR({ studentId: req.user.studentId, passId, validTo });
    const pass = await Pass.create({ passId, user: req.user.id, route: routeId || null, pickupPoint, qrCodeData, validFrom, validTo, semester: semester || 'Summer 2025', cardNo: Math.floor(100 + Math.random() * 900).toString() });
    res.status(201).json({ message: 'Pass application submitted.', pass });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStatus = async (req, res) => {
  try {
    const pass = await Pass.findOne({ user: req.user.id }).sort({ createdAt: -1 }).populate('route');
    if (!pass) return res.status(404).json({ message: 'No pass application found.' });
    res.json(pass);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.submitComplaint = async (req, res) => {
  try {
    // Complaint stored - placeholder response
    res.status(201).json({ message: 'Complaint submitted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.verifyQR = async (req, res) => {
  const start = Date.now();
  try {
    const { qrData } = req.body;
    const decoded = JSON.parse(Buffer.from(qrData, 'base64').toString('utf8'));
    const pass = await Pass.findOne({ passId: decoded.passId }).populate('user');
    if (!pass) return res.status(404).json({ valid: false, message: 'Pass not found.' });
    const now = new Date();
    const expired = new Date(decoded.validTo) < now;
    const valid = pass.status === 'Approved' && !expired;
    res.json({ valid, status: pass.status, expired, student: pass.user?.name, responseMs: Date.now() - start });
  } catch (err) {
    res.status(400).json({ valid: false, message: 'Invalid QR data.' });
  }
};

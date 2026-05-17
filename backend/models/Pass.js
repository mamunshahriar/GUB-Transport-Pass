const mongoose = require('mongoose');

const passSchema = new mongoose.Schema({
  passId: { type: String, unique: true, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  pickupPoint: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Expired', 'Rejected'], default: 'Pending' },
  qrCodeData: { type: String }, // Encrypted payload: studentId + expiry
  validFrom: { type: Date },
  validTo: { type: Date },
  cardNo: { type: String },
  semester: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pass', passSchema);

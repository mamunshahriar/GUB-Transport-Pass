const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  routeNumber: { type: String, required: true, unique: true },
  routeTitle: { type: String, required: true },
  stops: [{ type: String }],
  timings: [{ departure: String, arrival: String }],
  activeBuses: { type: Number, default: 0 },
  capacity: { type: Number, default: 40 },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Route', routeSchema);

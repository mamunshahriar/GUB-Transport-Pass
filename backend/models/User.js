const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  studentId: { type: String, unique: true, required: true },
  department: { type: String, enum: ['CSE', 'EEE', 'BBA', 'English', 'Law', 'Pharmacy'], required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => /^[a-zA-Z0-9._%+-]+@student\.green\.ac\.bd$/.test(v),
      message: 'Email must be a valid @student.green.ac.bd address',
    },
  },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Student', 'Admin', 'TransportOfficer'], default: 'Student' },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.matchPassword = async function (entered) {
  return bcrypt.compare(entered, this.password);
};

module.exports = mongoose.model('User', userSchema);

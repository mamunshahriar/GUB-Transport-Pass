const User = require('../models/User');
const Pass = require('../models/Pass');

exports.getDashboardStats = async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: 'Student' });
    const activePasses = await Pass.countDocuments({ status: 'Approved' });
    const pendingRequests = await Pass.countDocuments({ status: 'Pending' });
    res.json({ totalStudents, activePasses, pendingRequests, activeBuses: 72 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const { search = '', page = 1, limit = 10 } = req.query;
    const query = search
      ? { role: 'Student', $or: [{ name: { $regex: search, $options: 'i' } }, { studentId: { $regex: search } }, { department: { $regex: search, $options: 'i' } }] }
      : { role: 'Student' };
    const total = await User.countDocuments(query);
    const students = await User.find(query).select('-password').skip((page - 1) * limit).limit(Number(limit));
    res.json({ students, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.verifyPass = async (req, res) => {
  try {
    const pass = await Pass.findById(req.params.id);
    if (!pass) return res.status(404).json({ message: 'Pass not found.' });
    const { status } = req.body; // 'Approved' or 'Rejected'
    pass.status = status;
    if (status === 'Approved') {
      pass.validFrom = new Date();
      const to = new Date();
      to.setMonth(to.getMonth() + 5);
      pass.validTo = to;
    }
    await pass.save();
    res.json({ message: `Pass ${status.toLowerCase()} successfully.`, pass });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

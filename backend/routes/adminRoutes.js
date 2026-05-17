const router = require('express').Router();
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { getDashboardStats, getStudents, verifyPass } = require('../controllers/adminController');

router.get('/dashboard/stats', protect, adminOnly, getDashboardStats);
router.get('/students', protect, adminOnly, getStudents);
router.put('/pass/verify/:id', protect, adminOnly, verifyPass);

module.exports = router;

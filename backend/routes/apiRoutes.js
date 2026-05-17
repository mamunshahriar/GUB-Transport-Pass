const router = require('express').Router();
const { protect, officerOnly } = require('../middlewares/authMiddleware');
const { applyPass, getStatus, submitComplaint, verifyQR } = require('../controllers/passController');

router.post('/pass/apply', protect, applyPass);
router.get('/pass/status', protect, getStatus);
router.post('/complaints', protect, submitComplaint);
router.post('/pass/verify-qr', protect, officerOnly, verifyQR);

module.exports = router;

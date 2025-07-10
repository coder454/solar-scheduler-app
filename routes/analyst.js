const express = require('express');
const router = express.Router();
const { getAnalytics } = require('../controllers/analystController');
const auth = require('../middleware/authMiddleware');

router.get('/analytics', auth, getAnalytics);
module.exports = router;
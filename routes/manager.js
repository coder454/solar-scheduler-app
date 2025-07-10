const express = require('express');
const router = express.Router();
const { createSchedule, getAllSchedules } = require('../controllers/managerController');
const auth = require('../middleware/authMiddleware');

router.post('/schedule', auth, createSchedule);
router.get('/schedules', auth, getAllSchedules);
module.exports = router;
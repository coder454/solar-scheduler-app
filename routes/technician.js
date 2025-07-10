const express = require('express');
const router = express.Router();
const { getAssignedTasks, markTaskComplete } = require('../controllers/technicianController');
const auth = require('../middleware/authMiddleware');

router.get('/tasks', auth, getAssignedTasks);
router.post('/complete', auth, markTaskComplete);
module.exports = router;
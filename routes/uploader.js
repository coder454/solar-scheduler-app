const express = require('express');
const router = express.Router();
const { uploadPanelData } = require('../controllers/uploaderController');
const auth = require('../middleware/authMiddleware');

router.post('/upload', auth, uploadPanelData);
module.exports = router;
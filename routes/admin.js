const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');

router.post('/create', auth, createUser);
router.get('/users', auth, getAllUsers);
module.exports = router;
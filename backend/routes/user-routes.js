const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const userController = require('../controllers/user-controllers');

router.post('/login', userController.authUser);
router.post('/register', userController.registerUser);
router.get('/profile', protect, userController.userProfile);

module.exports = router;

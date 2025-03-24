// backend/src/routes/authRoutes.js
const express = require('express');
const { signup, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/hi', authMiddleware, (req, res) => {
  res.json({ message: `Hi, Admin!` });
});

module.exports = router;

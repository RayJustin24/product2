const express = require('express');
const authenticateJWT = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateJWT, (req, res) => {
  res.json({ message: 'You have access to this route', user: req.user });
});

module.exports = router;

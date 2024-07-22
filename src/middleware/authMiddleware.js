const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateJWT(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateJWT;
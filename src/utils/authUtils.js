const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = { id: user.id, username: user.username };
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
};

module.exports = { generateToken };

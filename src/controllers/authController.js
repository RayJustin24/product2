const { addUser, findUserByUsername } = require('../config/userDatabase');
const { generateToken } = require('../utils/authUtils');

const signup = (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    if (findUserByUsername(username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = addUser(username, password, firstName, lastName);
    const token = generateToken(newUser);

    res.status(201).json({ user: newUser, token });
};

const login = (req, res) => {
    const { username, password } = req.body;
    const user = findUserByUsername(username);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = generateToken(user);

    res.status(200).json({ user, token });
};

module.exports = { signup, login };

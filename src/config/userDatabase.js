const { users, User } = require('../models/userModel');

const addUser = (username, password, firstName, lastName) => {
    const newUser = new User(username, password, firstName, lastName);
    users.push(newUser);
    return newUser;
};

const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

module.exports = { addUser, findUserByUsername };

const { v4: uuidv4 } = require('uuid');

const users = [];

class User {
    constructor(username, password, firstName, lastName) {
        this.id = uuidv4();
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

module.exports = { users, User };

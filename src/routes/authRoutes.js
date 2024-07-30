const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { createValidator } = require('express-joi-validation');
const Joi = require('joi');

const validator = createValidator();

const userSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(6),
});

router.post('/register', validator.body(userSchema), authController.register);
router.post('/login', validator.body(userSchema), authController.login);

module.exports = router;
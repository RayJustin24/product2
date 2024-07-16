const Joi = require('joi');

const signupSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
});

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = { signupSchema, loginSchema };

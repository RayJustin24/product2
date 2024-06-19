const Joi = require('joi');

const createProductSchema = Joi.object({
    productname: Joi.string().required(),
    barcode: Joi.string().optional(),
    description: Joi.string().optional(),
    expiry_date: Joi.date().optional(),
    purchase_date: Joi.date().optional(),
    stock: Joi.number().integer().required(),
    vatable: Joi.boolean().required(),
    category: Joi.string().required(),
    price: Joi.number().required()
});

module.exports = createProductSchema;

const Joi = require('joi');

const updateProductSchema = Joi.object({
    productname: Joi.string().optional(),
    barcode: Joi.string().optional(),
    description: Joi.string().optional(),
    expiry_date: Joi.date().optional(),
    purchase_date: Joi.date().optional(),
    stock: Joi.number().integer().optional(),
    vatable: Joi.boolean().optional(),
    category: Joi.string().optional(),
    price: Joi.number().optional()
});

module.exports = updateProductSchema;
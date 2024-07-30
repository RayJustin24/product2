const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { createValidator } = require('express-joi-validation');
const Joi = require('joi');
const authMiddleware = require('../middlewares/auth');

const validator = createValidator();

const productSchema = Joi.object({
  productname: Joi.string().required(),
  barcode: Joi.string().required(),
  description: Joi.string().allow(null, ''),
  expiry_date: Joi.date().allow(null),
  purchase_date: Joi.date().required(),
  vatable: Joi.boolean().default(true),
  category: Joi.string().required(),
  price: Joi.number().precision(2).positive().required(),
});

router.get('/', authMiddleware, productController.getAllProducts);
router.get('/:id', authMiddleware, productController.getProductById);
router.post('/', authMiddleware, validator.body(productSchema), productController.createProduct);
router.put('/:id', authMiddleware, validator.body(productSchema), productController.updateProduct);
router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;
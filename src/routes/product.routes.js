const express = require('express');
const { createValidator } = require('express-joi-validation');
const productController = require('../controllers/product.controller');
const createProductSchema = require('../validation/create.product.validation');
const updateProductSchema = require('../validation/update.product.validation');

const validator = createValidator({});

const router = express.Router();

router.post('/products', validator.body(createProductSchema), productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', validator.body(updateProductSchema), productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;

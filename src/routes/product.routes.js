const express = require('express');
const { createValidator } = require('express-joi-validation');
const productController = require('../controllers/product.controller');
const createProductSchema = require('../validation/create.product.validation');
const updateProductSchema = require('../validation/update.product.validation');
const authenticate = require('../middlewares/authenticate');

const validator = createValidator({});

const router = express.Router();

router.post('/products', authenticate, validator.body(createProductSchema), productController.createProduct);
router.get('/products', authenticate, productController.getAllProducts);
router.get('/products/:id', authenticate, productController.getProductById);
router.put('/products/:id', authenticate, validator.body(updateProductSchema), productController.updateProduct);
router.delete('/products/:id', authenticate, productController.deleteProduct);

module.exports = router;

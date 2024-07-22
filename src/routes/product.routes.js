const express = require('express');
const { createValidator } = require('express-joi-validation');
const productController = require('../controllers/product.controller');
const createProductSchema = require('../validation/create.product.validation');
const updateProductSchema = require('../validation/update.product.validation');
const authenticateJWT = require('../middleware/authMiddleware');

const validator = createValidator({});
const router = express.Router();

router.post('/products', authenticateJWT, validator.body(createProductSchema), productController.createProduct);
router.get('/products', authenticateJWT, productController.getAllProducts);
router.get('/products/:id', authenticateJWT, productController.getProductById);
router.put('/products/:id', authenticateJWT, validator.body(updateProductSchema), productController.updateProduct);
router.delete('/products/:id', authenticateJWT, productController.deleteProduct);

module.exports = router;
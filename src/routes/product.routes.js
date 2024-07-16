const express = require('express');
const { createValidator } = require('express-joi-validation');
const productController = require('../controllers/product.controller');
const createProductSchema = require('../validation/create.product.validation');
const updateProductSchema = require('../validation/update.product.validation');
const authMiddleware = require('../middlewares/authMiddleware');

const validator = createValidator({});

const router = express.Router();

router.post('/products', authMiddleware, validator.body(createProductSchema), productController.createProduct);
router.get('/products', authMiddleware, productController.getAllProducts);
router.get('/products/:id', authMiddleware, productController.getProductById);
router.put('/products/:id', authMiddleware, validator.body(updateProductSchema), productController.updateProduct);
router.delete('/products/:id', authMiddleware, productController.deleteProduct);

module.exports = router;

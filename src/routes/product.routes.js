const express = require('express');
const { createValidator } = require('express-joi-validation');
const productController = require('../controllers/product.controller');
const createProductSchema = require('../validation/create.product.validation');
const updateProductSchema = require('../validation/update.product.validation');
<<<<<<< HEAD
const authenticateJWT = require('../middleware/authMiddleware');
=======
const authenticate = require('../middlewares/authenticate');
>>>>>>> 3dddfb58f4fb900dc016069a2b2f7c092ab02bc5

const validator = createValidator({});
const router = express.Router();

<<<<<<< HEAD
router.post('/products', authenticateJWT, validator.body(createProductSchema), productController.createProduct);
router.get('/products', authenticateJWT, productController.getAllProducts);
router.get('/products/:id', authenticateJWT, productController.getProductById);
router.put('/products/:id', authenticateJWT, validator.body(updateProductSchema), productController.updateProduct);
router.delete('/products/:id', authenticateJWT, productController.deleteProduct);
=======
router.post('/products', authenticate, validator.body(createProductSchema), productController.createProduct);
router.get('/products', authenticate, productController.getAllProducts);
router.get('/products/:id', authenticate, productController.getProductById);
router.put('/products/:id', authenticate, validator.body(updateProductSchema), productController.updateProduct);
router.delete('/products/:id', authenticate, productController.deleteProduct);
>>>>>>> 3dddfb58f4fb900dc016069a2b2f7c092ab02bc5

module.exports = router;

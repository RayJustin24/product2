const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./src/routes/product.routes'); 
const authRoutes = require('./src/routes/auth.routes');
const errorHandler = require('./src/middleware/errorHandler');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

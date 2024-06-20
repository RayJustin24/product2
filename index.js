const express = require('express');
const app = express();
const productRoutes = require('./src/routes/product.routes'); 
const errorHandler = require('./src/middleware/errorHandler');

app.use(express.json());
app.use('/api', productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

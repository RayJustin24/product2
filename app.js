const express = require('express');
const connectDB = require('./config/userDatabase');
const authRoutes = require('./routes/auth');
const protectedRoute = require('./routes/protectedRoute');
const path = require('path');
const userDatabase = require('./src/config/userDatabase');

require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
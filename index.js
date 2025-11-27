const express = require('express');
const dotenv = require('dotenv').config();
const authRoutes = require('./ROUTES/authRoutes');

const app = express();

// VERY IMPORTANT — FIXES YOUR ERROR
app.use(express.json());

// ROUTES
app.use(authRoutes);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


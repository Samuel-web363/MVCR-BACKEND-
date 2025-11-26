const express = require('express'); 
const dotenv = require('dotenv').config();
const authRoutes = require('./ROUTES/authRoutes');

const app = express();

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(authRoutes);
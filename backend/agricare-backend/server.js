const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors')
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors())
// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

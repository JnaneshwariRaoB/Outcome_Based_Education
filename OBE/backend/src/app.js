const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const departmentRoutes = require('./routes/departmentRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Authentication routes
app.use('/api/auth', authRoutes);

// Department routes
app.use('/api/departments', departmentRoutes);

module.exports = app;

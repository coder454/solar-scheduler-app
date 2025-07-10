const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/technician', require('./routes/technician'));
app.use('/api/manager', require('./routes/manager'));
app.use('/api/uploader', require('./routes/uploader'));
app.use('/api/analyst', require('./routes/analyst'));
app.use('/api/admin', require('./routes/admin'));

module.exports = app;
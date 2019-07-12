const express = require('express');
const app = express();
const itemsRoutes = require('./routes/items');

app.use(express.json());

app.use('/api/v1/cars', itemsRoutes);

app.post('/api/v1/cars', (req, res) => {

});

module.exports = app;

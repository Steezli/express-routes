const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/v1/cars', (req, res) => {

});

module.exports = app;

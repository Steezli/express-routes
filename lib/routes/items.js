const { Router } = require('express');

const cars = [];

module.exports = Router()
  .post('/api/v1/cars', (req, res) => {
    const {
      Name,
      Horsepower,
      Acceleration,
      Origin
    } = req.body;

    const car = {
      Name,
      Horsepower,
      Acceleration,
      Origin
    };
    cars.push(car);
    res.send(car);
  });

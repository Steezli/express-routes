const { Router } = require('express');

const cars = [];

module.exports = Router()
  .post('/', (req, res) => {
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
  })
  .get('/', (req, res) => {
    res.send(cars);
  })
  .get('/:id', (req, res)=> {
    res.send(cars[req.params.id]);
  })

  .put('/:id', (req, res) => {
    const { 
      Name, 
      Horsepower, 
      Acceleration, 
      Origin 
    } = req.body;
    const updatedCar = {
      Name, 
      Horsepower, 
      Acceleration, 
      Origin 
    };

    cars[req.params.id] = updatedCar;
    res.send(updatedCar);
  });


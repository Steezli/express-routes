const request = require('supertest');
const app = require('../lib/app');

// CRUD
describe('items routes', () => {
  it('can create an item with POST', () => {
    return request(app)
      .post('/api/v1/cars')
      .send(
        { 
          Name: 'ford torino', 
          Horsepower: 140, 
          Acceleration: '10.5', 
          Origin: 'USA' 
        })
      .then(res => {
        expect(res.body).toEqual({
          Name: 'ford torino', 
          Horsepower: 140, 
          Acceleration: '10.5', 
          Origin: 'USA'
        });
      }); 
      
  });
  it('can get an array of items with GET', () => {
    return request(app)
      .get('/api/v1/cars')
      .then(res => {
        expect(res.body).toEqual([{ 
          Name: 'ford torino', 
          Horsepower: 140, 
          Acceleration: '10.5', 
          Origin: 'USA' 
        }]);
      });
  });
  it('can GET an item by index', () => {
    return request(app)
      .get('/api/v1/cars/0')
      .then(res => {
        expect(res.body).toEqual({ 
          Name: 'ford torino', 
          Horsepower: 140, 
          Acceleration: '10.5', 
          Origin: 'USA' 
        });
      });
  });
  it('can update an item with PUT', () => {
    const newCar = {
      Name: 'ford apple', 
      Horsepower: 40, 
      Acceleration: '10.5', 
      Origin: 'USA' 
    };
    return request(app)
      .put('/api/v1/cars/0')
      .send(newCar)
      .then(res => {
        expect(res.body).toEqual({
          Name: 'ford apple', 
          Horsepower: 40, 
          Acceleration: '10.5', 
          Origin: 'USA' 
        });
      });
  });
});
    
// {
//   "Name":"ford torino",
//   "Horsepower":140,
//   "Acceleration":10.5,
//   "Origin":"USA"
// },
// {
//   "Name":"ford galaxie 500",
//   "Horsepower":198,
//   "Acceleration":10,
//   "Origin":"USA"
// },
// {
//   "Name":"chevrolet impala",
//   "Horsepower":220,
//   "Acceleration":9,
//   "Origin":"USA"
// }
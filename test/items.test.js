const request = require('supertest');
const app = require('../lib/app');

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
// CRUD
describe('items routes', () => {
  it('can create an item with POST', () => {
    return request(app)
      .post('/api/v1/cars')
      .send({ Name: 'ford torino', Horsepower: 140, Acceleration: '10.5', Origin: 'USA' })
      .then(res => {
        expect(res.body).toEqual({
          Name: 'ford torino', 
          Horsepower: 140, 
          Acceleration: '10.5', 
          Origin: 'USA'
        });
      }); 
  });
});

const express = require('express');
const request = require('supertest');
const routes = require('../routes');

describe('The Server', () => {
  const app = express();
  app.use('/', routes);

  test('serves as an example endpoint', done => {
    request(app)
      .get('/api/tags')
      .expect(200)
      .expect(response => expect(response.body).toEqual(expect.arrayContaining(['Node'])))
      .then(() => done())
      .catch(err => done(err));
  });
});

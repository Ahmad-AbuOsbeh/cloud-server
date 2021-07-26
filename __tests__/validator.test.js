'use strict';

const server = require('../src/server');
const supertest = require('supertest');

test('500 if no name in the query string', async () => {
  const response = await supertest(server.app).get('/person');
  //   console.log('response', response);
  //   console.log('response.status', response.status);

  expect(response.status).toBe(500);
});

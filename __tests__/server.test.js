'use strict';

const server = require('../src/server');
const supertest = require('supertest');

describe('SERVER Tests', () => {
  test('200 if the name is in the query string', async () => {
    const query = 'ahmad';
    const response = await supertest(server.app).get(`/person?name=${query}`);
    //   console.log('response', response);
    //   console.log('response.status', response.status);

    expect(response.status).toBe(200);
  });

  test('given an name in the query string, the output object is correct', async () => {
    const query = 'ahmad';
    const response = await supertest(server.app).get(`/person?name=${query}`);
    //   console.log('response', response);
    console.log('response.body', response.body);

    expect(response.body.name).toBe(query);
  });
});

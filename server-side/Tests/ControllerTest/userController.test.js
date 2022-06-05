/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// const { expect } = require('chai');
const frisby = require('frisby');

const URL = 'http://localhost:3000/user';

describe('Test user controller', () => {
  it('If it finds all users in database should return status 200', async () => {
    await frisby.get(URL)
      .expect('status', 200);
  });
});

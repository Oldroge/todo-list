/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// const { expect } = require('chai');
const frisby = require('frisby');

const URL = 'http://localhost:3000/user';

const { addUser } = require('../../Controller/usersController');

const { mockNewUser } = require('../Mocks/usersMocks');

describe('Test user controller', () => {
  describe('Test getAllUsers function', () => {
    it('If it finds all users in database should return status 200', async () => {
      await frisby.get(URL)
        .expect('status', 200);
    });
  });

  describe.only('Test addUser function', () => {
    it('if all datas are right, return status 201', async () => {
      await frisby.post(URL, addUser(mockNewUser))
        .expect('status', 201);
      done();
    });
  });
});

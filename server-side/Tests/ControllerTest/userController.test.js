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

    it('Field full_name should is required', async () => {
      await frisby.post(URL, addUser({
        id: 3,
        email: 'alaska@gmail.com',
        password: 'alaska104',
        token: 'oMmRZmWcc1zge9JJOyvSA4kAi6p629802354dc5c',
      }))
        .expect('status', 400)
        .then((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.message).toBe('Invalid entries. Try again');
        });
    });

    it('Field email should is required', async () => {
      await frisby.post(URL, addUser({
        id: 3,
        full_name: 'Alaska da Silva Polli',
        password: 'alaska104',
        token: 'oMmRZmWcc1zge9JJOyvSA4kAi6p629802354dc5c',
      }))
        .expect('status', 400)
        .then((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.message).toBe('Invalid entries. Try again');
        });
    });
  });
});

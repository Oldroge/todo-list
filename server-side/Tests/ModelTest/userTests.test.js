/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const { expect } = require('chai');

const { getUsers } = require('../../Model/Users');

describe('Test users model', () => {
  it('Should return an object array', async () => {
    const getAllUsers = await getUsers();

    expect(getAllUsers).to.be.an('array');
  });

  it('Should return at least 1 user from database', async () => {
    const getAllUsers = await getUsers();

    expect(getAllUsers).to.have.lengthOf.at.least(1);
  });
});

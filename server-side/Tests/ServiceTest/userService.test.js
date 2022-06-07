/* eslint-disable no-undef */
const { expect } = require('chai');

const { addNewUser } = require('../../Service/usersService');

const { mockNewUser } = require('../Mocks/usersMocks');

describe.only('Tests user Service', () => {
  it('When informed data isnt valid should return false', async () => {
    const addUser = await addNewUser(mockNewUser);

    expect(addUser).to.be.a('boolean');
    expect(addUser).to.be.equal(false);
  });
});

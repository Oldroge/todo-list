/* eslint-disable no-undef */
const { expect } = require('chai');

const { addNewUser } = require('../../Service/usersService');

const { mockNewUser } = require('../Mocks/usersMocks');

describe.only('Tests user Service', () => {
  it('When input invalid datas, should return false', async () => {
    const addUser = await addNewUser(mockNewUser);

    expect(addUser).to.be.a('boolean');
    expect(addUser).to.be.equal(false);
  });
  it('When input valid datas, should return true', async () => {
    const addUser = await addNewUser(mockNewUser);

    expect(addUser).to.be.a('boolean');
    expect(addUser).to.be.equal(true);
  });
});

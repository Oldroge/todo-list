/* eslint-disable no-undef */
const { expect } = require('chai');

const taskMocks = require('../Mocks/tasksMocks');

describe.only('Test tasks model', () => {
  it('Should return an object array', () => {
    expect(taskMocks).to.be.an('array');
  });
});

/* eslint-disable no-undef */
const { expect } = require('chai');

const { getAllTasks } = require('../../Model/Tasks');

describe('Test tasks model', () => {
  it('Should return an object array', async () => {
    const getTasks = await getAllTasks();

    expect(getTasks).to.be.an('array');
  });
});

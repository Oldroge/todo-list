/* eslint-disable no-undef */
const frisby = require('frisby');

const URL = 'http://localhost:3000/tasks';

describe('Test tasks controller', () => {
  it('if it finds all tasks in database should return status 200', async () => {
    await frisby.get(URL)
      .expect('status', 200);
  });
});

/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const { expect } = require('chai');

const { getUsers, addNewUser } = require('../../Model/Users');

const { mockNewUser } = require('../Mocks/usersMocks');

const {
  DELETE_USER_DATAS,
  DELETE_TASKS_DATAS,
  POST_USER_DATAS,
  POST_TASKS_DATAS,
  SET_FOREIGN_KEY,
} = require('../dbs_scripts/sqlCommands');
const db = require('../../Model/Connections');

describe('Test users model', () => {
  it('Should return an object array', async () => {
    const getAllUsers = await getUsers();

    expect(getAllUsers).to.be.an('array');
  });

  it('Should return at least 1 user from database', async () => {
    const getAllUsers = await getUsers();

    expect(getAllUsers).to.have.lengthOf.at.least(1);
  });

  it('Should insert a new user and return especific datas', async () => {
    await db.execute(DELETE_USER_DATAS);
    await db.execute(DELETE_TASKS_DATAS);

    const {
      id, full_name, email, password, token,
    } = mockNewUser;

    const addUser = await addNewUser(mockNewUser);
    const getAllUsers = await getUsers();
    expect(getAllUsers).to.have.lengthOf(1);

    expect(addUser).to.have.deep.keys({
      id, full_name, email, password, token,
    });

    await db.execute(SET_FOREIGN_KEY);
    await db.execute(POST_USER_DATAS);
    await db.execute(POST_TASKS_DATAS);
  });
});

/* eslint-disable camelcase */
/* eslint-disable no-undef */
const { expect } = require('chai');

const { addNewUser } = require('../../Service/usersService');

const { mockNewUser, mockNewUserWithWrongInfos } = require('../Mocks/usersMocks');

const {
  DELETE_USER_DATAS,
  DELETE_TASKS_DATAS,
  POST_USER_DATAS,
  POST_TASKS_DATAS,
  SET_FOREIGN_KEY,
} = require('../dbs_scripts/sqlCommands');
const db = require('../../Model/Connections');

beforeEach(async () => {
  await db.execute(DELETE_USER_DATAS);
  await db.execute(DELETE_TASKS_DATAS);
});

describe.only('Tests user Service', () => {
  describe('Test the function where add a new user', () => {
    it('When input invalid datas, should return false', async () => {
      const addUser = await addNewUser(mockNewUserWithWrongInfos);

      expect(addUser).to.be.a('boolean');
      expect(addUser).to.be.equal(false);
    });

    it('Object should have id, full_name, email, password and token keys', async () => {
      const {
        id, full_name, email, password, token,
      } = mockNewUser;

      const addUser = await addNewUser(mockNewUser);

      expect(addUser).to.have.deep.keys({
        id, full_name, email, password, token,
      });
    });

    it('The keys from object should return the right types', async () => {
      const {
        id, full_name, email, password, token,
      } = await addNewUser(mockNewUser);

      expect(id).to.be.a('number');
      expect(full_name).to.be.a('string');
      expect(email).to.be.a('string');
      expect(password).to.be.a('string');
      expect(token).to.be.a('string');
    });
  });
});

afterEach(async () => {
  await db.execute(SET_FOREIGN_KEY);
  await db.execute(POST_USER_DATAS);
  await db.execute(POST_TASKS_DATAS);
});

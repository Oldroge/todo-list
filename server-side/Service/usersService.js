/* eslint-disable camelcase */
const usersModel = require('../Model/Users');

const addNewUser = async (newUser) => {
  const addUser = await usersModel.addNewUser(newUser);

  return addUser;
};

module.exports = {
  addNewUser,
};

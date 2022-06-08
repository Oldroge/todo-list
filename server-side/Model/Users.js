/* eslint-disable camelcase */
const connection = require('./Connections');

const getUsers = async () => {
  const [user_datas] = await connection.execute(
    'SELECT * FROM todo_list.user_datas',
  );

  return user_datas;
};

const addNewUser = async ({
  full_name, email, password, token,
}) => {
  const connectAndInsert = await connection.execute(
    'INSERT INTO user_datas (full_name, email, password, token) VALUES(?, ?, ?, ?)',
    [full_name, email, password, token],
  );

  return {
    id: connectAndInsert[0].insertId,
    full_name,
    email,
    token,
  };
};

module.exports = {
  getUsers,
  addNewUser,
};

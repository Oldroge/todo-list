/* eslint-disable camelcase */
const connection = require('./Connections');

const getUsers = async () => {
  const [user_datas] = await connection.execute(
    'SELECT * FROM todo_list.user_datas',
  );

  return user_datas;
};

const addNewUser = async (newUser) => {
  const {
    id, full_name, email, password, token,
  } = newUser;

  await connection.execute(
    `INSERT INTO todo_list.user_datas (
      full_name, email, password, token
      )
      VALUES (
        '${full_name}', '${email}', '${password}', '${token}'
        )`,
  );

  return {
    id,
    full_name,
    email,
  };
};

module.exports = {
  getUsers,
  addNewUser,
};

/* eslint-disable camelcase */
const connection = require('./Connections');

const getUsers = async () => {
  const [user_datas] = await connection.execute(
    'SELECT * FROM todo_list.user_datas',
  );

  return user_datas;
};

module.exports = {
  getUsers,
};

/* eslint-disable camelcase */
const connection = require('./Connections');

const getAllTasks = async () => {
  const [tasks_datas] = await connection.execute(
    'SELECT * FROM todo_list.tasks_datas',
  );
  return tasks_datas;
};

module.exports = {
  getAllTasks,
};

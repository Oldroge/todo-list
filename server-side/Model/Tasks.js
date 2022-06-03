/* eslint-disable camelcase */
const connection = require('./Connections');

const getAllTasks = async () => {
  const [tasks_datas] = connection.execute(
    'SELECT * FROM tasks_datas',
  );
  return tasks_datas;
};

module.exports = { getAllTasks };

const { getAllTasks } = require('../Model/Tasks');

const getTasks = async (_req, res) => {
  try {
    const getingTasks = await getAllTasks();
    if (getingTasks) {
      return res.status(200).json(getingTasks);
    }
    return res.status(404).json([]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getTasks,
};

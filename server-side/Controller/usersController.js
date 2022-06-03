const { getUsers } = require('../Model/Users');

const getAllUsers = async (_req, res) => {
  try {
    const allUsers = await getUsers();
    if (allUsers) {
      return res.status(200).json(allUsers);
    }
    return res.status(404).json([]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
};

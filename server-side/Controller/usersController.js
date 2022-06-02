const { getUsers } = require('../Model/Users');

const getAllUsers = async (_req, res) => {
  try {
    const allUsers = await getUsers();

    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
};

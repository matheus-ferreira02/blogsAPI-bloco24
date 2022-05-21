const userService = require('../services/userService');

const getUsers = async (req, res) => {
  const { data } = req;

  const users = await userService.getUsers(data);

  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await userService.createUser(displayName, email, password, image);

  return res.status(201).json({ token });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { data } = req;

  const user = await userService.getUserById(data, id);

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};

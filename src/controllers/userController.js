const userService = require('../services/userService');

const getUsers = async (req, res) => {
  const { decodedData } = req;

  const users = await userService.getUsers(decodedData);

  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await userService.createUser(displayName, email, password, image);

  return res.status(201).json({ token });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { decodedData } = req;

  const user = await userService.getUserById(decodedData, id);

  return res.status(200).json(user);
};

const deleteTheUser = async (req, res) => {
  const { decodedData } = req;

  await userService.deleteTheUser(decodedData);

  return res.status(204).end();
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteTheUser,
};

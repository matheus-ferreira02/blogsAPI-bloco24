const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { name, email, password, image } = req.body;

  const response = userService.createUser(name, email, password, image);

  return res.status(201).json(response);
};

module.exports = {
  createUser,
};

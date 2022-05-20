const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = userService.createUser(displayName, email, password, image);

  return res.status(201).json({ message: token });
};

module.exports = {
  createUser,
};

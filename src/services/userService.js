const { User } = require('../database/models');
const createObjError = require('../utils/createObjError');
const generateToken = require('../utils/generateToken');
const helpersService = require('./helpersService');

const getUsers = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  });

  if (!user) throw createObjError(404, 'User does not exist');

  return user;
};

const createUser = async (displayName, email, password, image) => {
  const isExistsUser = await helpersService.getUserByEmail(email);
  
  if (isExistsUser) throw createObjError(409, 'User already registered');

  await User.create({
    displayName,
    email,
    password,
    image,
  });

  const token = generateToken(email);

  return token;
};

const deleteTheUser = async (email) => {
  const user = await helpersService.getUserByEmail(email);

  await User.destroy({
    where: {
      id: user.id,
    },
  });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteTheUser,
};

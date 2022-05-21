const { User } = require('../database/models');
const createObjError = require('../utils/createObjError');
const generateToken = require('../utils/generateToken');

const getUser = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  return user;
};

const getUsers = async (email) => {
  const user = await getUser(email);
  
  if (!user) throw createObjError(401, 'Expired or invalid token');

  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return users;
};

const createUser = async (displayName, email, password, image) => {
  const isExistsUser = await getUser(email);
  
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

module.exports = {
  createUser,
  getUsers,
};

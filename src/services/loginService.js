const { User } = require('../database/models');
const createObjError = require('../utils/createObjError');
const generateToken = require('../utils/generateToken');

const login = async (email, password) => {
  const isExists = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (!isExists) throw createObjError(400, 'Invalid fields');

  const token = generateToken(email);

  return token;
};

module.exports = {
  login,
};

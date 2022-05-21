const { User } = require('../database/models');
const createObjError = require('../utils/createObjError');

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  return user;
};

const validateAuth = async (email) => {
  const user = await getUserByEmail(email);
  
  if (!user) throw createObjError(401, 'Expired or invalid token');
};

module.exports = {
  validateAuth,
  getUserByEmail,
};

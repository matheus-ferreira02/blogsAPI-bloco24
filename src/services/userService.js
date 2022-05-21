const { User } = require('../database/models');

const getUser = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  return user.dataValues;
};

const createUser = async (displayName, email, password, image) => {
  const response = await User.create({
    displayName,
    email,
    password,
    image,
  });

  return response.id;
};

module.exports = {
  createUser,
};

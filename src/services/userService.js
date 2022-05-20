const { User } = require('../database/models');

const createUser = async (name, email, password, image) => {
  const response = await User.create({
    name,
    email,
    password,
    image,
  });

  return response.id;
};

module.exports = {
  createUser,
};

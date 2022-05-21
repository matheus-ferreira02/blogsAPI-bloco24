const helpersService = require('./helpersService');

const createPost = async (email) => {
  await helpersService.validateAuth(email);

  
};

module.exports = {
  createPost,
};

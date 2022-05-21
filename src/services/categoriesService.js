const { Category } = require('../database/models');
const helpersService = require('./helpersService');

const createCategory = async (email, name) => {
  await helpersService.validateAuth(email);
  const response = await Category.create({ name });

  return response;
};

module.exports = {
  createCategory,
};

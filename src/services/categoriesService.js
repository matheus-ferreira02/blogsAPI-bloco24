const { Category } = require('../database/models');
const helpersService = require('./helpersService');

const createCategory = async (email, category) => {
  await helpersService.validateAuth(email);
  const response = await Category.create({ category });

  return response;
};

module.exports = {
  createCategory,
};

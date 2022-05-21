const { Category } = require('../database/models');
const helpersService = require('./helpersService');

const createCategory = async (email, name) => {
  await helpersService.validateAuth(email);

  const response = await Category.create({ name });

  return response;
};

const getAllCategories = async (email) => {
  await helpersService.validateAuth(email);

  const response = await Category.findAll();

  return response;
};

module.exports = {
  createCategory,
  getAllCategories,
};

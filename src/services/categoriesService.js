const { Category } = require('../database/models');

const getCategories = async (categories) => {
  const response = await Category.findAll({
    where: {
      id: categories,
    },
  });

  return response;
};

const createCategory = async (name) => {
  const response = await Category.create({ name });

  return response;
};

const getAllCategories = async () => {
  const response = await Category.findAll();

  return response;
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategories,
};

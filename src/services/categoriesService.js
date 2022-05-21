const { Category } = require('../database/models');

const createCategory = async (category) => {
  const response = await Category.create({ category });

  return response;
};

module.exports = {
  createCategory,
};

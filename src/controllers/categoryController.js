const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const response = await categoriesService.createCategory(name);

  return res.status(201).json(response);
};

const getAllCategories = async (req, res) => {
  const response = await categoriesService.getAllCategories();

  return res.status(200).json(response);
};

module.exports = {
  createCategory,
  getAllCategories,
};

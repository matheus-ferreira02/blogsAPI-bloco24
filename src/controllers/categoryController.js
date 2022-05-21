const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { decodedData } = req;

  const response = await categoriesService.createCategory(decodedData, name);

  return res.status(201).json(response);
};

const getCategories = async (req, res) => {
  const { decodedData } = req;

  const response = await categoriesService.createCategory(decodedData);

  return res.status(200).json(response);
};

module.exports = {
  createCategory,
  getCategories,
};

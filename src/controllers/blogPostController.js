const blogPostService = require('../services/blogPostService');

const createPost = async (req, res) => {
  const { decodedData } = req;
  
  const response = await blogPostService.createPost(decodedData, req.body);

  return res.status(201).json(response);
};

const getPosts = async (req, res) => {
  const { decodedData } = req;

  const response = await blogPostService.getPosts(decodedData);

  return res.status(200).json(response);
};

const getPostById = async (req, res) => {
  const { decodedData } = req;
  const { id } = req.params;

  const response = await blogPostService.getPostById(decodedData, id);

  return res.status(200).json(response);
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};

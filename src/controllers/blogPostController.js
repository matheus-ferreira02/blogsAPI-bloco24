const blogPostService = require('../services/blogPostService');

const createPost = async (req, res) => {  
  const response = await blogPostService.createPost(req.body);

  return res.status(201).json(response);
};

const getPosts = async (_req, res) => {
  const response = await blogPostService.getPosts();

  return res.status(200).json(response);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const response = await blogPostService.getPostById(id);

  return res.status(200).json(response);
};

const updatePost = async (req, res) => {
  const { id } = req.params;

  const response = await blogPostService.updatePost(req.body, id);

  return res.status(200).json(response);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { decodedData } = req;

  await blogPostService.deletePost(decodedData, id);

  return res.status(204).end();
};

const searchPost = async (req, res) => {
  const { q } = req.query;

  const response = await blogPostService.searchPost(q);

  return res.status(200).json(response);
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};

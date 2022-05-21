const blogPostService = require('../services/blogPostService');

const createPost = async (req, res) => {
  const { decodedData } = req;
  
  const response = await blogPostService.createPost(decodedData, req.body);

  return res.status(201).json(response);
};

module.exports = {
  createPost,
};

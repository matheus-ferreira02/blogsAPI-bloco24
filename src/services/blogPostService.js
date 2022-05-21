const categoriesService = require('./categoriesService');
const createObjError = require('../utils/createObjError');
const { BlogPost } = require('../database/models');
const helpersService = require('./helpersService');

const validateCategories = async (categories) => {
  const response = await categoriesService.getCategories(categories);

  if (response.length !== categories.length) throw createObjError(400, '"categoryIds" not found');
};

const createPost = async (email, post) => {
  await helpersService.validateAuth(email);

  const { title, content, categoryIds } = post;
  await validateCategories(categoryIds);
  const response = await BlogPost.create({
    title,
    content,
    userId: 1,
    published: new Date(),
    updated: new Date(),
  });

  await post.addBlogPosts(categoryIds);

  return response;
};

module.exports = {
  createPost,
};

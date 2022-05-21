const categoriesService = require('./categoriesService');
const createObjError = require('../utils/createObjError');
const { BlogPost } = require('../database/models');
const helpersService = require('./helpersService');

const validateCategories = async (categories) => {
  const response = await categoriesService.getCategories(categories);

  if (response.length !== categories.length) throw createObjError(400, '"categoryIds" not found');
};

const addCategotToPost = async (post, categoryIds) => {
  const categories = await categoriesService.getCategories(categoryIds);

  await post.addBlogPosts(categories);
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

  await addCategotToPost(response, categoryIds);

  return response;
};

module.exports = {
  createPost,
};

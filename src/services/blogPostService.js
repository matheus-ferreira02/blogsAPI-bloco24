const categoriesService = require('./categoriesService');
const createObjError = require('../utils/createObjError');
const { BlogPost, User, Category } = require('../database/models');
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

  await response.addCategories(categoryIds);

  return response;
};

const getPosts = async (email) => {
  await helpersService.validateAuth(email);

  const response = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'users',
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });

  return response;
};

module.exports = {
  createPost,
  getPosts,
};

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
        as: 'user',
        attributes: {
          exclude: ['password'],
        },        
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });

  return response;
};

const getPostById = async (email, id) => {
  await helpersService.validateAuth(email);

  const response = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },        
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });

  if (!response) throw createObjError(404, 'Post does not exist');

  return response;
};

const validateEditorUser = async (email, idPost) => {
  const post = await BlogPost.findByPk(idPost);
  if (!post) throw createObjError(404, 'Post does not exist');

  const user = await helpersService.getUserByEmail(email);
  if (user.dataValues.id !== post.dataValues.userId) throw createObjError(401, 'Unauthorized user');
};

const updatePost = async (email, newPost, idPost) => {
  await helpersService.validateAuth(email);

  await validateEditorUser(email, idPost);

  const [updatedPostId] = await BlogPost
    .update({ title: newPost.title, content: newPost.content }, {
      where: {
        id: idPost,
      },
    });

  const updatedPost = await getPostById(email, updatedPostId);

  return updatedPost;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
};

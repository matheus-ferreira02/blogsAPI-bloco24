const routes = require('express').Router();
const rescue = require('express-rescue');
const validateAuth = require('../../middlewares/validateAuth');
const blogPostController = require('../../controllers/blogPostController');
const validatePost = require('../../middlewares/validatePost');
const validatePostUpdate = require('../../middlewares/validatePostUpdate');

routes.post('/', rescue(validateAuth), rescue(validatePost), rescue(blogPostController.createPost));

routes.get('/', rescue(validateAuth), rescue(blogPostController.getPosts));

routes.get('/search', rescue(validateAuth), rescue(blogPostController.searchPost));

routes.get('/:id', rescue(validateAuth), rescue(blogPostController.getPostById));

routes.put('/:id',
  rescue(validateAuth), rescue(validatePostUpdate), rescue(blogPostController.updatePost));

routes.delete('/:id',
  rescue(validateAuth), rescue(blogPostController.deletePost));

module.exports = routes;

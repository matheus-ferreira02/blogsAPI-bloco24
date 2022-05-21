const routes = require('express').Router();
const rescue = require('express-rescue');
const validateAuth = require('../../middlewares/validateAuth');
const blogPostController = require('../../controllers/blogPostController');
const validatePost = require('../../middlewares/validatePost');

routes.post('/', rescue(validateAuth), rescue(validatePost), rescue(blogPostController.createPost));

routes.get('/', rescue(validateAuth), rescue(blogPostController.getPosts));

module.exports = routes;

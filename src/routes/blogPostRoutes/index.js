const routes = require('express').Router();
const rescue = require('express-rescue');
const validateAuth = require('../../middlewares/validateAuth');
const blogPostController = require('../../controllers/blogPostController');

routes.post('/', rescue(validateAuth), rescue(blogPostController.createPost));

module.exports = routes;

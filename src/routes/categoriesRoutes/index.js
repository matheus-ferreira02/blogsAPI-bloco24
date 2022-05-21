const routes = require('express').Router();
const rescue = require('express-rescue');
const validateAuth = require('../../middlewares/validateAuth');
const validateCategory = require('../../middlewares/validateCategory');
const categoryController = require('../../controllers/categoryController');

routes.post('/', rescue(validateAuth), rescue(validateCategory), categoryController.createCategory);

routes.get('/', rescue(validateAuth), categoryController.getAllCategories);

module.exports = routes;

const routes = require('express').Router();
const rescue = require('express-rescue');
const UserController = require('../../controllers/userController');
const validateCreateUser = require('../../middlewares/validateCreateUser');
const validateAuth = require('../../middlewares/validateAuth');

routes.post('/', rescue(validateCreateUser), rescue(UserController.createUser));

routes.get('/', rescue(validateAuth), rescue(UserController.getUsers));

module.exports = routes;

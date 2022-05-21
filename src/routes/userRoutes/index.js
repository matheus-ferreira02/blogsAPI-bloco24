const routes = require('express').Router();
const rescue = require('express-rescue');
const UserController = require('../../controllers/userController');
const validateCreateUser = require('../../middlewares/validateCreateUser');

routes.post('/', rescue(validateCreateUser), rescue(UserController.createUser));

module.exports = routes;

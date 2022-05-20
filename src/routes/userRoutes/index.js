const routes = require('express').Router();
const rescue = require('express-rescue');
const UserController = require('../../controllers/userController');

routes.post('/', rescue(UserController.createUser));

module.exports = routes;

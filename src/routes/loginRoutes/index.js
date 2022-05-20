const route = require('express').Router();
const loginController = require('../../controllers/loginController');
const validateLogin = require('../../middlewares/validateLogin');

route.post('/', validateLogin, loginController.login);

module.exports = route;

const routes = require('express').Router();
const rescue = require('express-rescue');
const loginController = require('../../controllers/loginController');
const validateLogin = require('../../middlewares/validateLogin');

routes.post('/', rescue(validateLogin), rescue(loginController.login));

module.exports = routes;

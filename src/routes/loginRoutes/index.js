const route = require('express').Router();
const rescue = require('express-rescue');
const loginController = require('../../controllers/loginController');
const validateLogin = require('../../middlewares/validateLogin');

route.post('/', rescue(validateLogin), rescue(loginController.login));

module.exports = route;

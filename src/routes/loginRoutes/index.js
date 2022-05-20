const route = require('express').Router();
const loginController = require('../../controllers/loginController');

route.post('/login', loginController.login);

const routes = require('express').Router();
const rescue = require('express-rescue');
const validateAuth = require('../../middlewares/validateAuth');

routes.post('/', rescue(validateAuth), rescue());

module.exports = routes;

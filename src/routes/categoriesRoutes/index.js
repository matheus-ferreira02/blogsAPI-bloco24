const routes = require('express').Router();
const rescue = require('express-rescue');

routes.post('/', rescue());

module.exports = routes;

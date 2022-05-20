const route = require('express').Router();
const loginRoutes = require('./loginRoutes');

route.use('/login', loginRoutes);

module.exports = route;

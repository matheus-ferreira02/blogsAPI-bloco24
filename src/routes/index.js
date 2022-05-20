const route = require('express').Router();
const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');

route.use('/login', loginRoutes);
route.use('/user', userRoutes);

module.exports = route;

const route = require('express').Router();
const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');
const categoriesRoutes = require('./categoriesRoutes');

route.use('/login', loginRoutes);
route.use('/user', userRoutes);
route.use('/categories', categoriesRoutes);

module.exports = route;

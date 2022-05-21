const route = require('express').Router();
const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const blogPostRoutes = require('./blogPostRoutes');

route.use('/login', loginRoutes);
route.use('/user', userRoutes);
route.use('/categories', categoriesRoutes);
route.use('/post', blogPostRoutes);

module.exports = route;

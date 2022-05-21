require('dotenv').config();
const jwt = require('jsonwebtoken');
const createObjError = require('./createObjError');

module.exports = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    return decoded;
  } catch (error) {
    return createObjError(401, 'Expired or invalid token');
  }  
};

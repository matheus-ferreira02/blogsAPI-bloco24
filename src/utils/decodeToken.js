require('dotenv').config();
const jwt = require('jsonwebtoken');
const createObjError = require('./createObjError');

module.exports = (token) => {
  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    
    return decodedData;
  } catch (error) {
    throw createObjError(401, 'Expired or invalid token');
  }  
};

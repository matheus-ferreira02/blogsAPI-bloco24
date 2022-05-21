require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return decoded;
};

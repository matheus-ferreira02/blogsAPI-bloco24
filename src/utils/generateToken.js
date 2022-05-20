require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algotithm: 'HS256',
  };

  const token = jwt.sign({ data: email }, process.env.JWT_SECRET, jwtConfig);

  return token;
};

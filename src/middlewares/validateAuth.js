const createObjError = require('../utils/createObjError');
const decodeToken = require('../utils/decodeToken');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw createObjError(401, 'Token not found');

  const decodedEmail = decodeToken(authorization);

  req.decodedData = decodedEmail.data;

  next();
};

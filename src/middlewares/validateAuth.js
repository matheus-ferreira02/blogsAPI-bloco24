const createObjError = require('../utils/createObjError');
const decodeToken = require('../utils/decodeToken');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw createObjError(401, 'Token not found');

  const decoded = decodeToken(authorization);

  if (!decoded.data) throw createObjError(401, 'Expired or invalid token');

  req.decodedData = decoded.data;

  next();
};

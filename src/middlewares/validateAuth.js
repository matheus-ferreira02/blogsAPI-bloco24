const createObjError = require('../utils/createObjError');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw createObjError(401, 'Token is required');

  next();
};

const schemaCreateUser = require('../joi/schemaCreateUser');
const createObjError = require('../utils/createObjError');

module.exports = (req, _res, next) => {
  const { displayName, email, password, image } = req.body;

  const { error } = schemaCreateUser.validate({ displayName, email, password, image });

  if (error) throw createObjError(400, error.message);

  next();
};

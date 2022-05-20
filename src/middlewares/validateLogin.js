const createObjError = require('../utils/createObjError');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;

  const { error } = schemaLogin.validate({ email, password });

  if (error) throw createObjError(400, error.message);

  next();
};

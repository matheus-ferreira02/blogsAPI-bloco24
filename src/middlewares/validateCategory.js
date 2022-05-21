const schemaCategory = require('../joi/schemaCategory');
const createObjError = require('../utils/createObjError');

module.exports = (req, _res, next) => {
  const { name } = req.body;

  const { error } = schemaCategory.validate(name);

  if (error) throw createObjError(400, error.message);

  next();
};

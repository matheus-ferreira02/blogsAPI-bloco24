const schemaPost = require('../joi/schemaPost');
const createObjError = require('../utils/createObjError');

module.exports = (req, _res, next) => {
  const { title, content } = req.body;

  const { error } = schemaPost.validate({ title, content });

  if (error) throw createObjError(400, 'Some required fields are missing');

  next();
};

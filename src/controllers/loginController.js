const loginServices = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await loginServices.login(email, password);
  
  return res.status(200).json({ token });
};

module.exports = {
  login,
};

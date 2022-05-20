const login = (req, res) => {
  const token = 'ola';
  return res.status(200).json({ token });
};

module.exports = {
  login,
};

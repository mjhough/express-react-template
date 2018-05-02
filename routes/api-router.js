const version = (req, res) => {
  res.send('1.0');
};

module.exports = (router) => {
  router.post('/api/version', version);
};

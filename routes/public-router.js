const index = (req, res) => {
  res.render('index');
};

module.exports = (router) => {
  router.get(/^(\/|\/about)$/i, index); // Route '/' and '/about' through react router
};


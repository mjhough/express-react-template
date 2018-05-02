const express = require('express');

const apiRouter = require('./api-router');
const publicRouter = require('./public-router');

const router = express.Router();

// Use routes from other files
apiRouter(router);
publicRouter(router);

module.exports = router;

const router = require('express').Router();
const publicRoutes = require('./public');

router.use('/', publicRoutes);

module.exports = router;

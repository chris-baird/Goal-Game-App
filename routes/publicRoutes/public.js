const express = require('express');
const userController = require('../../controllers/userController');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously
router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  userController.signUp
);

router.post('/login', userController.login);

module.exports = router;

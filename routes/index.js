var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

/* LOGIN */
router.get('/login', (req, res) => {
  res.render('login');
});

/* SIGNUP */
router.get('/signup', (req, res) => {
  res.render('signup');
});

/* LOGOUT */
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = router;

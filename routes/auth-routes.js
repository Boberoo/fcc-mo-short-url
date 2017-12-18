var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', function(req, res) {
    res.render('login', {user: req.user});
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/auth/login');
});

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', {
    successRedirect: '/profile',
    failureRedirect: '/auth/login'
}));

module.exports = router;
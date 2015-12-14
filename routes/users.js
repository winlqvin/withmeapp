var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
router.get('/auth/facebook/callback', 
	  passport.authenticate('facebook', { successRedirect: '/profile',
	                                      failureRedirect: '/' }));
router.get('/profile', function(req, res){
		console.log("OK");
	});
module.exports = router;

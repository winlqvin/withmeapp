var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var http = require('http');
var configAuth = require('./auth');

module.exports = function(passport) {
   
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});



	passport.use(new FacebookStrategy({
	     clientID: configAuth.facebookAuth.clientID,
	     clientSecret: configAuth.facebookAuth.clientSecret,
	     callbackURL: configAuth.facebookAuth.callbackURL
	   },
	   function(accessToken, refreshToken, profile, done) {
	     	process.nextTick(function(){
	    //  		var options = {
					//   host: 'http://localhost',
					//   port: 3000,
					//   path: '/users/userList',
					//   method: 'GET'
					// };

					// http.request(options, function(res) {
					//   console.log('STATUS: ' + res.statusCode);
					//   console.log('HEADERS: ' + JSON.stringify(res.headers));
					//   res.setEncoding('utf8');
					//   res.on('data', function (chunk) {
					//     console.log('BODY: ' + chunk);
					//   });
					// }).end();
	     		// User.findOne({'facebook.id': profile.id}, function(err, user){
	     		// 	if(err)
	     		// 		return done(err);
	     		// 	if(user)
	     		// 		return done(null, user);
	     		// 	else {
	     		// 		var newUser = new User();
	     		// 		newUser.facebook.id = profile.id;
	     		// 		newUser.facebook.token = accessToken;
	     		// 		newUser.facebook.name = profile.displayName;
	     		// 	//	newUser.facebook.email = profile.emails[0].value;

	     		// 		newUser.save(function(err){
	     		// 			if(err)
	     		// 				throw err;
	     		// 			return done(null, newUser);
	     		// 		})
	     		// 		console.log(profile);
	     		// 	}
	     		// });
	     	console.log(profile);
	     	console.log("token: " + accessToken);
	     	return done(null, null);
	     	});
	     }

	));


};
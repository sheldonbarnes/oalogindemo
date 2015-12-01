var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;


module.exports = function() {
  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_CLIENTSECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    passReqToCallBack: true
  }, function (req, accessToken, refreshToken, profile, done){

    var user = {};

      console.log('Dumping profile');
    console.log(profile);

    //user.email = profile.emails[0].value;
    //console.log(profile);
    user.image = 'http://graph.facebook.com/v2.5/'+ profile.id + '/picture'
    //user.image = profile._json.image.url;
    user.displayName = profile.displayName;

    user.facebook = {};

    user.facebook.id = profile.id;
    user.facebook.token = accessToken;

    console.log(user);
    done(null, user);
  }));
}

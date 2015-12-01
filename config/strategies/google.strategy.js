var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy


module.exports = function() {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_CLIENTSECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'},
    function(req, accessToken,refreshToken, profile, done){

      var user = {};

      user.email = profile.emails[0].value;
      console.log(profile);
      //user.image = profile.photos[0].value;
      user.image = profile._json.image.url;
      user.displayName = profile.displayName;

      user.google = {};

      user.google.id = profile.id;
      user.google.token = accessToken;

      console.log(user);
      done(null, user);
    }
  ));
};

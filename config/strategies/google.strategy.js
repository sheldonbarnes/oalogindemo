var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy


module.exports = function() {
  passport.use(new GoogleStrategy({
    clientID: '1061498720238-bec9feg457jdv0j40kl0ibg0lq556m3m.apps.googleusercontent.com',
    clientSecret: '1JnosuXvRkX8xfR-O58v9KCb',
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

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;


module.exports = function() {
  passport.use(new FacebookStrategy({
    clientID: '477575412421796',
    clientSecret: 'd5deab7389c7d5f102cca4f074c097d9',
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

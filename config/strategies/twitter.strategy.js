var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy

module.exports = function() {
    
  passport.use(new TwitterStrategy({
      consumerKey: process.env.TWITTER_CONSUMERKEY,
      consumerSecret: process.env.TWITTER_CONSUMERSECRET,
      callbackUrl: 'http://localhost:3000/twitter/callback',
      passReqToCallBack: true
  }, function(req, token, tokenSecret, profile, done){
      var user = {};

      //user.email = profile.emails[0].value;
      console.log(profile);
      user.image = profile.photos[0].value;
      //user.image = profile._json.image.url;
      user.displayName = profile.displayName;

      user.twitter = {};

      user.twitter.id = profile.id;
      user.twitter.token = accessToken;

      console.log(user);
      done(null, user);
  }))  
};
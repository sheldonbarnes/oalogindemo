
var passport = require('passport');

module.exports = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());


  passport.serializeUser(function(user, done){
    done(null, user);
  });

  // pulls a user out of the session
  passport.deserializeUser(function(user, done){
    done(null, user);
  });
  require('./strategies/google.strategy')();
  require('./strategies/facebook.strategy')();

}

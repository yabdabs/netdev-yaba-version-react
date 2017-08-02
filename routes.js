var passport = require('passport');
var Account = require('./models/account');
var path = require('path');
var express = require('express');


module.exports = function (app) {

  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, './public/login.html'));
  });

  app.get('/register', function(req, res) {
      res.render('register', { });
  });

  app.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
  });

  app.get('/login', function(req, res) {
      res.render('login', { user : req.user });
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/');
  });

  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

  app.get('/ping', function(req, res){
      res.send("pong!", 200);
  });

  app.use(express.static(path.join(__dirname, 'public')));

};

//Set up login
//Process through express
//post to database
//Route to index, react page

//Set up logout
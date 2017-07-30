//Dependencies
var path = require('path');
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var logger = require('morgan');

var React = require('react');

mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Use body parser with our app
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Make public a static dir
app.use(express.static("public"));


// Passport-Local-Mongoose main config
var app = express();
app.set('port', process.env.PORT || 1337);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
// app.set('view options', { layout: false });
app.use(logger("dev"));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());

app.use(passport.initialize());
app.use(passport.session());
// app.use(app.router);


// app.configure('development', function(){
//     app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

// app.configure('production', function(){
//     app.use(express.errorHandler());
// });

// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose');



// routes
require('./routes')(app);

// listener
app.listen(app.get('port'), function(){
  console.log(("Express server listening on port " + app.get('port')))
});
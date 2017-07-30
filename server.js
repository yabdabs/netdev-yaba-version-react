 //Check Alan's MERN passport Server File, include /server index.js
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

//Require Db Schema

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




//   ALAN's SERVER.JS


// const express = require('express')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const dbConnection = require('./db') // loads our connection to the mongo database
// const passport = require('./passport')
// const app = express()
// const PORT = process.env.PORT || 8080

// // ===== Middleware ====
// app.use(morgan('dev'))
// app.use(
// 	bodyParser.urlencoded({
// 		extended: false
// 	})
// )
// app.use(bodyParser.json())
// app.use(
// 	session({
// 		secret: process.env.APP_SECRET || 'this is the default passphrase',
// 		store: new MongoStore({ mongooseConnection: dbConnection }),
// 		resave: false,
// 		saveUninitialized: false
// 	})
// )
// // ===== testing middleware =====
// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })

// // ===== Passport ====
// app.use(passport.initialize())
// app.use(passport.session())

// // ==== if its production environment!
// if (process.env.NODE_ENV === 'production') {
// 	const path = require('path')
// 	console.log('YOU ARE IN THE PRODUCTION ENV')
// 	app.use('/static', express.static(path.join(__dirname, '../build/static')))
// 	app.get('/', (req, res) => {
// 		res.sendFile(path.join(__dirname, '../build/'))
// 	})
// }

// /* Express app ROUTING */
// app.use('/auth', require('./auth'))

// // ====== Error handler ====
// app.use(function(err, req, res, next) {
// 	console.log('====== ERROR =======')
// 	console.error(err.stack)
// 	res.status(500)
// })

// // ==== Starting Server =====
// app.listen(PORT, () => {
// 	console.log(`App listening on PORT: ${PORT}`)
// })




//  SERVER/DB/index.js


/* Mongo Database
// * - this is where we set up our connection to the mongo database
// */
// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise
// const MONGO_URL = 'mongodb://localhost/mern-passport'

// if (process.env.MONGODB_URI) {
// 	mongoose.connect(process.env.MONGODB_URI)
// } else {
// 	mongoose.connect(MONGO_URL) // local mongo url
// }

// // should mongoose.connection be put in the call back of mongoose.connect???
// const db = mongoose.connection
// db.on('error', err => {
// 	console.log(`There was an error connecting to the database: ${err}`)
// })
// db.once('open', () => {
// 	console.log(
// 		`You have successfully connected to your mongo database: ${MONGO_URL}`
// 	)
// })

// module.exports = db




//  SERVER/PASSPORT/index.js ((LINES 7, 8, 43 , 44 ABOVE))


// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
// const User = require('../db/models/user')

// passport.serializeUser((user, done) => {
// 	done(null, { _id: user._id, email: user.email }) // take out email in production
// })

// passport.deserializeUser((id, done) => {
// 	User.findOne({ _id: id }, 'email', (err, user) => {
// 		done(null, user)
// 	})
// })

// // ==== Register Local Strategy ====
// passport.use(
// 	new LocalStrategy(
// 		{
// 			usernameField: 'email'
// 		},
// 		function(username, password, done) {
// 			User.findOne({ email: username }, (err, userMatch) => {
// 				if (err) {
// 					return done(err)
// 				}
// 				if (!userMatch) {
// 					return done(null, false, { message: 'Incorrect username' })
// 				}
// 				if (!userMatch.checkPassword(password)) {
// 					return done(null, false, { message: 'Incorrect password' })
// 				}
// 				return done(null, userMatch)
// 			})
// 		}
// 	)
// )

// module.exports = passport



const express = require('express')
const router = express.Router()
const User = require('../db/models/developer')
const passport = require('../passport')

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== /GET user!!======')
	console.log(req.user)
	if (req.user) {
		//Database query
		User.findOne({email: req.user.email}, function(err, result){
			console.log(result)
			if (err) throw err;
			if(result) return res.json({user :result})
		})
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.get('/fulluser', (req, res, next) => {
	console.log("FULL USER ROUTE")
	console.log(req.query.email)

	User.findOne({email: req.query.email}, function(err, result){
		console.log(result)
		if (err) throw err;
		if(result) return res.json(result)
	})
})

router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('login================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login !!!!!!!!!! HISHIFOAHHF')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	console.log(req.body)
	const { email, password, firstName, lastName } = req.body
	// ADD VALIDATION
	User.findOne({ 'email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the email: ${email}`
			})
		}
		const newUser = new User({
			'email': email,
			'password': password,
			'firstName': firstName,
			'lastName': lastName

		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

router.put('/user', (req, res) =>{
	console.log("------------------")
	console.log("AUTH/USER")
	console.log(req.body)
	console.log("------------------")
	console.log("------------------")
	console.log("REQ.USER.EMAIL")
	console.log(req.body.email)
	console.log("--------------------")
	User.update({'email': req.body.email}, { $set: {firstName: req.body.firstName, lastName: req.body.lastName, bio:req.body.bio}}).exec(function(err, success){
		if (err) throw err;
		console.log("////////////////////////////////")
		console.log("FIRST NAME POSTED")
		console.log("////////////////////////////////")
		console.log("------------------------------\n SUcCESS RESPONSE")
		console.log(success)
		console.log("-----------------------------------\n")
		return res.json(success)
	})

})

router.put('/skills', (req, res) =>{
	console.log("skills ROUTE HIT!!!")
	console.log(req.body)
	User.update({'email':req.body.email}, { $push: { "skills": {"skillName": req.body.skillName, "value": req.body.value} } 
	},
	{ new: true} 
	).exec( function(err, goodShit){
		if (err) throw err;
		console.log("PUSHED OBJECT INTO SKILLS ARRAY")
		console.log(goodShit)
		return res.json(goodShit)
	})//close .exec


})//close router.put


router.get('/skills', (req, res) => {
	console.log("get route for skills hit")
	console.log(req.query.email)

	User.findOne({email: req.query.email}, function(err, result){
		console.log(result)
		if (err) throw err;
		if(result) return res.json(result)
		})
})



module.exports = router
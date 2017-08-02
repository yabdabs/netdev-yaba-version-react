
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var User = new Schema({
    username: {
    	type: String,
    	required: true,
    	unique: true
    },
    fullname: {
    	type: String,
    	required: true
    },
    password: {
    	type: String,
    	required: true
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Enter a valid e-mail"]
    },
    description: String,
    location: {
    	city: String,
    	state: String
    },
    skills: [{
    	skillName: String,
    	value: Number
    }],
    idPic: {
    	link: String
    },
    pictureLinks: [{
    	link: String
    }],
    friends: [{
    	id: String,
    	name: String,
    	idPic: String
    }]
});

userSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
};

// Define hooks for pre-saving
User.pre('save', function(next) {
	this.password = this.hashPassword(this.password)
	next()
})


module.exports = mongoose.model('User', User);
// Create reference to User & export
// const User = mongoose.model('User', userSchema)
// module.exports = User


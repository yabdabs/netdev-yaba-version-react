var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
mongoose.promise = Promise


var UserSchema = new Schema({
    // userName: {
    //  type: String,
    //  required: true,
    //  unique: true
    // },
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Enter a valid e-mail"],
        required: true,
        unique: true
    },
    bio: {
     type: String,
    },
    //May need to modify Location field
    location: {
     type: String,
        city: String,
        state: String
    },
    skills: [{
        skillName: String,
        value: Number
    }],
    idPic: {
        type: String
    },
    pictureLinks: [{
        type: String
    }],
    portfolio: [
    {
        title: String,
        img: String,
        demoLink: String,
        gitHubLink: String

    }
    ],
    friends: [{
        id: String,
        name: String,
        idPic: String
    }]
});

UserSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }

};

// Define hooks for pre-saving
UserSchema.pre('save', function(next) {
    if (!this.password) {
        console.log('=======NO PASSWORD PROVIDED=======')
        next()
    } else {
        this.password = this.hashPassword(this.password)
        next()
    }
    this.password = this.hashPassword(this.password)
    next()
})

module.exports = mongoose.model('User', UserSchema);
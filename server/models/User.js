const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum length is 6 characters'],
    },

    name: {
        type: String,
        required: [true, 'Please include your first name']
    },
}, { timestamps: true });

// static signup method
userSchema.statics.signup = async function(email, password, name) { //cannot use arrow function because we are using 'this' keyword
    
    if (!email || !password || !name) {
        throw new Error('Please fill in all fields');
    }

    const exists = await this.findOne({email})

    if (exists) {
        throw new Error('Email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash, name});

    return user;

}

// static login method
userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
        throw new Error('Please fill in all fields');
    }


    const user = await this.findOne({email})

    if (!user) {
        throw new Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect password');
    }

    return user;

}

module.exports = mongoose.model('User', userSchema); 
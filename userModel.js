const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: 'Full name cant be empty'
    },
    password: {
        type: String,
        required: 'Password cant be empty',
        minlength: [8, 'Must be 8 characters long']
    }
});

var user = mongoose.model('User', userSchema);

module.exports = user;

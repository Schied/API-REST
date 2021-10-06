const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    playlist: [{
        name: {
            type: String,
            required: true
        },
        songs: [String]
    }]
});

const user = mongoose.model('User', userSchema);

module.exports = user;
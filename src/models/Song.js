const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const song = mongoose.model('Song', songSchema);

module.exports = song;
const mongoose = require('mongoose');

const githubProfileSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true 
    },
    repocount: { 
        type: Number, 
        required: true 
    },
    contribution: { 
        type: Number, 
        required: true 
    },
});

const githubProfile = mongoose.model('githubProfile', githubProfileSchema);

module.exports = githubProfile;

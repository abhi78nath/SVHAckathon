const mongoose = require('mongoose');

const dribbbleProfileSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true 
    },
    works: { 
        type: String, 
        required: true 
    },
    projects: { 
        type: String, 
        required: true 
    },
    collections: { 
        type: String, 
        required: true 
    },
    likedShots: { 
        type: String, 
        required: true 
    },
});

const DribbbleProfile = mongoose.model('DribbbleProfile', dribbbleProfileSchema);

module.exports = DribbbleProfile;

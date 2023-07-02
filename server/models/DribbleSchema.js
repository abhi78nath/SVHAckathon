const mongoose = require('mongoose');

const dribbbleProfileSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true 
    },
    works: { 
        type: Number, 
        required: true 
    },
    projects: { 
        type: Number, 
        required: true 
    },
    collections: { 
        type: Number, 
        required: true 
    },
    likedShots: { 
        type: Number, 
        required: true 
    },
});

const DribbbleProfile = mongoose.model('DribbbleProfile', dribbbleProfileSchema);

module.exports = DribbbleProfile;

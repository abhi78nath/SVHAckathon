const mongoose = require('mongoose');
const CodeforcesProfile = require('./CodeforcesSchema');
const DribbbleProfile = require('./DribbleSchema');
const KaggleProfile = require('./KaggleSchema');

const CandidateDetailsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'candidates',
    },
    name: {
        type: String,
        required: true,
        ref: 'candidates',
        populate: { select: 'name' },
    },
    email: {
        type: String,
        required: true,
        ref: 'candidates',
        populate: { select: 'email' },
    },
    roles: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    // codeforcesData: {
    //     // Define the structure for the scraped Codeforces data
    //     handle: {
    //         type: String,
    //         required: true,
    //     },
    //     rank: {
    //         type: String,
    //         required: true,
    //     },
    //     rating: {
    //         type: Number,
    //         required: true,
    //     },
    //     contribution: {
    //         type: Number,
    //         required: true,
    //     },
    //     mostUsedLanguages: {
    //         type: [String],
    //         required: true
    //     },
    // },
    codeforcesData: {
        type: mongoose.Schema.Types.Array,
        ref: 'CodeforcesProfile',
      },
    dribbbleData: {
        type: mongoose.Schema.Types.Array,
        ref:'DribbbleProfile',
    },
    // kaggleData: {
    //     type: mongoose.Schema.Types.Map,
    //     ref:'KaggleProfile',
    // },
    // githubData: {
    //     type: mongoose.Schema.Types.Array,
    //     ref:'githubProfile'
    // },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('CandidateProfiles', CandidateDetailsSchema);

const mongoose = require('mongoose');

const codeforcesSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true,
    // unique: true,
  },
  rank: {
    type: String,
    required:true
  },
  rating: {
    type: String,
    required:true
},
contribution: {
    type: String,
    required:true
},
mostUsedLanguages: {
    type: String,
    required:true
  },
});

const CodeforcesProfile = mongoose.model('CodeforcesProfile', codeforcesSchema);

module.exports = CodeforcesProfile;

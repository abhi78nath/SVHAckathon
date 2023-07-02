const mongoose = require('mongoose');

const kaggleProfileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  competitions: {
    type: Number,
    required: true,
  },
  datasets: {
    type: Number,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  discussions: {
    type: Number,
    required: true,
  },
  discussionSummary: {
    type: String,
    required: true,
  },
  discussionSummaryBottom: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
});

const KaggleProfile = mongoose.model('KaggleProfile', kaggleProfileSchema);

module.exports = KaggleProfile;

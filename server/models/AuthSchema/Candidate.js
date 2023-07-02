const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  role: {
    type:String,
    default:'candidate'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('candidate', candidateSchema);
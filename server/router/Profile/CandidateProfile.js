const express = require('express');
const CandidateDetails = require('../../models/CandidateSchema');
const Profile = require('../../models/ProfileSchema');
const authenticate = require('../../middleware/authenticate');

const router = express.Router();

// Route: Fetch Candidate Details using GET "/api/candidatedetails". Login required
router.get('/', authenticate, async (req, res) => {
  try {
    // Find the candidate details based on the logged-in user's ID
    const candidateDetails = await CandidateDetails.findOne({ user: req.user.id });

    // If candidate details are not found, return 404 Not Found error
    if (!candidateDetails) {
      return res.status(404).json({ error: 'Candidate details not found' });
    }

    // Create the profile object
    const profile = new Profile({
      user: req.user.id,
      name: candidateDetails.name,
      email: candidateDetails.email,
      roles: candidateDetails.roles,
      phone: candidateDetails.phone,
      experience: candidateDetails.experience
    });

    // Save the profile
    const savedProfile = await profile.save();

    res.json(savedProfile);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

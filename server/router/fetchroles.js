const express = require('express');
const CandidateDetails = require('../models/CandidateSchema');
const router = express.Router();

// Route: Fetch Candidates with Role as "sde" using GET "/api/candidates/sde"
router.get('/swe', async (req, res) => {
  try {
    const candidates = await CandidateDetails.find({ roles: 'swe' });

    // If no candidates are found, return an empty array
    if (candidates.length === 0) {
      return res.json([]);
    }

    res.json(candidates);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

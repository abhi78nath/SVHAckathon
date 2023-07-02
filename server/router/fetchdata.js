const express = require('express');
const CandidateDetails = require('../models/CandidateSchema');

const router = express.Router();

// Route to get candidate details by ID
router.get('/candidatedetails/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const candidateDetails = await CandidateDetails.findById(id)
      .populate('codeforcesData', ['handle', 'rank', 'rating', 'contribution', 'mostUsedLanguages'])
      .populate('dribbbleData', ['username', 'works', 'projects', 'collections', 'likedShots'])
      .exec();

    if (!candidateDetails) {
      return res.status(404).json({ error: 'Candidate details not found' });
    }

    res.json(candidateDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

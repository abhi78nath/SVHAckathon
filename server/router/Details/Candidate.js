const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchcandidate = require('../../middleware/fetchcandidate');
const authenticate = require('../../middleware/authenticate');
const CandidateDetails = require('../../models/CandidateSchema');
const getCodeforcesData = require('../scrapperRouter/cf');
const getDribbleData = require('../scrapperRouter/dribbble')
const getKaggleData = require('../scrapperRouter/kaggle')
const router = express.Router();

// Route 2: Add a new CandidateDetail using POST "/api/candidatedetails/adddetails". Login required
router.post(
  '/adddetails',
  fetchcandidate,
  authenticate,
  [
    body('roles', 'Enter a Valid Role').isLength({ min: 3 }),
    body('phone', 'Enter a Valid Phone Number').isMobilePhone(),
    body('experience', 'Experience must be at least 5 characters').isLength({ min: 5 }),
    body('codeforcesurl').isURL(),
      body('dribbbleurl').isURL(),
      // body('kaggleurl').isURL(),
  ],
  async (req, res) => {
    try {
      const { name, email, roles, phone, experience, codeforcesurl, dribbbleurl } = req.body;

      // If there are errors, return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Scrape Codeforces data
      const scrapedCodeforcesData = await getCodeforcesData(codeforcesurl);

      // Scrape Dribbble data
      const scrapedDribbbleData = await getDribbleData(dribbbleurl);

      // Scrape Kaggle data
      // const scrapedKaggleData = await getKaggleData(kaggleurl);

      // Create the candidate details object
      const candidateDetails = new CandidateDetails({
        user: req.user.id,
        name,
        email,
        roles,
        phone,
        experience,
        // codeforcesurl,
        codeforcesData: scrapedCodeforcesData,
        dribbbleData: scrapedDribbbleData,
        // kaggleData: scrapedKaggleData,
        
      });

      // Save the candidate details
      const savedCandidateDetails = await candidateDetails.save();

      res.json(savedCandidateDetails);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

module.exports = router;

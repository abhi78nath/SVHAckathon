const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchcandidate = require('../../middleware/fetchcandidate');
const authenticate = require('../../middleware/authenticate');
const CandidateDetails = require('../../models/CandidateSchema');
const getCodeforcesData = require('../scrapperRouter/cf');
const getDribbleData = require('../scrapperRouter/dribbble')
const getKaggleData = require('../scrapperRouter/kaggle')
const getGitHubData = require('../scrapperRouter/git');
const fetchUser = require('../../middleware/fetchcandidate');
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
      // body('githuburl').isURL(),
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

      // const scrapeGitHubData = await getGitHubData(githuburl)

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
        // githubData: scrapeGitHubData
        
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


// Route: Fetch Candidate Details using GET "/api/candidatedetails". Login required
// Route: Fetch Candidate Details using GET "/api/candidatedetails". Login required
router.get('/fetch', fetchcandidate, async (req, res) => {
  try {
    // Find the candidate details based on the logged-in user's ID
    const candidateDetails = await CandidateDetails.findOne({ user: req.user.id })
      .populate('codeforcesData', '-__v')
      .populate('dribbbleData', '-__v');

    // If candidate details are not found, return 404 Not Found error
    if (!candidateDetails) {
      return res.status(404).json({ error: 'Candidate details not found' });
    }

    // Transform the data to the desired format
    const formattedData = {
      user: candidateDetails.user,
      name: candidateDetails.name,
      email: candidateDetails.email,
      roles: candidateDetails.roles,
      phone: candidateDetails.phone,
      experience: candidateDetails.experience,
      codeforcesData: candidateDetails.codeforcesData,
      dribbbleData: candidateDetails.dribbbleData,
      _id: candidateDetails._id,
      date: candidateDetails.date,
      // __v: candidateDetails.__v
    };

    res.json(formattedData);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
});



module.exports = router;

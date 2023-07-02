const express = require('express');
const { scrapeCodeforcesProfile } = require('../../scrappers/codeforcesScrapper');
const CodeforcesProfile = require('../../models/CodeforcesSchema');
const { URL } = require('url');


const router = express.Router();

router.get('/codeforces', async (req, res) => {
  try {
    const { url } = req.query;

    // Extract the handle from the URL
    const parsedUrl = new URL(url);
    const handle = parsedUrl.pathname.split('/')[2];

    const scrapedData = await scrapeCodeforcesProfile(handle);

    // Save the scraped data to MongoDB Atlas
    const codeforcesProfile = new CodeforcesProfile({
      handle,
      rating: scrapedData.rating,
      maxRating: scrapedData.maxRating,
      rank: scrapedData.rank,
      maxRank: scrapedData.maxRank,
      contribution: scrapedData.contribution,
    });

    await codeforcesProfile.save();

    res.json(scrapedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

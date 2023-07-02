const express = require('express');
const { scrapeDribbbleProfile } = require('../../scrappers/dribbleScrapper')
const DribbbleSchema = require('../../models/DribbleSchema');
const { URL } = require('url');

const router = express.Router();

router.get('/dribbble', async (req, res) => {
  try {
    const { url } = req.query;

    // Extract the username from the URL
    const parsedUrl = new URL(url);
    const username = parsedUrl.pathname.split('/')[1];
    console.log(username)

    const scrapedData = await scrapeDribbbleProfile(username);

    // Save the scraped data to MongoDB Atlas
    const dribbbleProfile = new DribbbleSchema({
      username,
      works: scrapedData.works,
      projects: scrapedData.projects,
      collections: scrapedData.collections,
      likedShots: scrapedData.likedShots,
    });

    await dribbbleProfile.save();

    res.json(scrapedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

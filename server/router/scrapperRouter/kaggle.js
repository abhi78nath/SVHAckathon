const express = require('express');
const { scrapeKaggleProfile } = require('../../scrappers/kaggleScrapper');
const KaggleSchema = require('../../models/KaggleSchema');
const { URL } = require('url');


const router = express.Router();

router.get('/kaggle', async (req, res) => {
  try {
    const { url } = req.query;

    // Extract the username from the URL
    const parsedUrl = new URL(url);
    const username = parsedUrl.pathname.split('/')[1];
    console.log(username)

    const scrapedData = await scrapeKaggleProfile(username);

    // Save the scraped data to MongoDB Atlas
    const kaggleProfile = new KaggleSchema({
      username,
      competitions: scrapedData.competitions,
      code: scrapedData.code,
      datasets: scrapedData.datasets,
      discussions: scrapedData.discussions,
      discussionSummary: scrapedData.discussionSummary,
      discussionSummaryBottom: scrapedData.discussionSummaryBottom,
      followers: scrapedData.followers,
    });

    await kaggleProfile.save();

    res.json(scrapedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

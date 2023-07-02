const express = require('express');
const { scrapeGitHubUserDetails } = require('../../scrappers/github')
const githubSchema = require('../../models/githubSchema');
const { URL } = require('url');

const router = express.Router();

router.get('/git', async (req, res) => {
  try {
    const { url } = req.query;

    // Extract the username from the URL
    const parsedUrl = new URL(url);
    const username = parsedUrl.pathname.split('/')[1];
    console.log(username)

    const scrapedData = await scrapeGitHubUserDetails(username);

    // Save the scraped data to MongoDB Atlas
    const githubProfile = new githubSchema({
      username,
      name: scrapedData.name,
      repocount:scrapedData.repoCount,
      contribution: scrapedData.contributionCount,
      
    });

    await githubProfile.save();

    res.json(scrapedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

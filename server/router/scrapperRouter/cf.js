const { scrapeCodeforcesProfile } = require('../../scrappers/codeforcesScrapper');
const CodeforcesProfile = require('../../models/CodeforcesSchema');
const { URL } = require('url');

async function getCodeforcesData(url) {
  try {
    // Extract the handle from the URL
    const parsedUrl = new URL(url);
    const handle = parsedUrl.pathname.split('/')[2];

    const scrapedData = await scrapeCodeforcesProfile(handle);

    // Save the scraped data to MongoDB Atlas
    const codeforcesProfile = new CodeforcesProfile({
      handle,
      rank: scrapedData.rank,
      rating: scrapedData.rating,
      contribution: scrapedData.contribution,
      mostUsedLanguages: scrapedData.mostUsedLanguages,
      // maxRank: scrapedData.maxRank,
    });

    await codeforcesProfile.save();

    return codeforcesProfile;
  } catch (error) {
    throw error;
  }
}

module.exports = getCodeforcesData;

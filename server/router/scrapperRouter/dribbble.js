const { scrapeDribbbleProfile } = require('../../scrappers/dribbleScrapper');
const DribbbleSchema = require('../../models/DribbleSchema');
const { URL } = require('url');

async function getDribbleData(url) {
  try {
    // Extract the username from the URL
    const parsedUrl = new URL(url);
    const username = parsedUrl.pathname.split('/')[1];
    console.log(username);

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

    return scrapedData;
  } catch (error) {
    throw error;
  }
}

module.exports = getDribbleData;

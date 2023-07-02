const { scrapeGitHubUserDetails } = require('../../scrappers/github');
const GithubProfile = require('../../models/githubSchema');
const { URL } = require('url');

async function getGitHubData(url) {
  try {
    // Extract the username from the URL
    const parsedUrl = new URL(url);
    const username = parsedUrl.pathname.split('/')[1];

    const scrapedData = await scrapeGitHubUserDetails(username);

    // Create the GitHub profile object
    const githubProfile = new GithubProfile({
      username,
      name: scrapedData.name,
      repoCount: scrapedData.repoCount,
      contributionCount: scrapedData.contributionCount,
    });

    // Save the GitHub profile to MongoDB Atlas
    await githubProfile.save();

    return githubProfile;
  } catch (error) {
    throw error;
  }
}

module.exports = getGitHubData;

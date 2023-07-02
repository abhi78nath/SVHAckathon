const axios = require('axios');

async function getMostUsedLanguages(username) {
  try {
    const response = await axios.get(`https://codeforces.com/api/user.status?handle=${username}`);
    const submissions = response.data.result;

    // Count the occurrences of each language
    const languageCounts = {};
    for (const submission of submissions) {
      const language = submission.programmingLanguage;
      if (language) {
        if (languageCounts[language]) {
          languageCounts[language]++;
        } else {
          languageCounts[language] = 1;
        }
      }
    }

    // Sort the language counts in descending order
    const sortedLanguages = Object.keys(languageCounts).sort((a, b) => languageCounts[b] - languageCounts[a]);

    // Get the top 5 most used languages
    const mostUsedLanguages = sortedLanguages.slice(0, 1);
    const mostUsedLanguage = mostUsedLanguages[0];
    

    return mostUsedLanguage;
  } catch (error) {
    throw error;
  }
}

module.exports = { getMostUsedLanguages };

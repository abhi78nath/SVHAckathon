const puppeteer = require('puppeteer');
const { getMostUsedLanguages } = require('../api/cfApi')

async function scrapeCodeforcesProfile(username) {
  try {

    const mostUsedLanguages = await getMostUsedLanguages(username);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = `https://codeforces.com/profile/${username}`;
    await page.goto(url);

    await page.waitForSelector('.info');

    const rank = await page.$eval('.user-rank span', element => {
        const rankText = element.textContent.trim();
        const firstWord = rankText.split(' ')[0].toLowerCase();
        return firstWord;
    });
      
    const rating = await page.$eval(`.user-${rank}`, element => element.textContent.trim());

    const contribution = await page.$eval('ul li:nth-child(2) span', element => element.textContent.trim());

    console.log('Rating:', rank);
    console.log('Contribution:', contribution);
    console.log('Most Used Languages:', mostUsedLanguages);

    

    await browser.close();

    const scrapedData = {
      rating,
        contribution,
        mostUsedLanguages,
    };

    return scrapedData;
  } catch (error) {
    throw error;
  }
}

module.exports = { scrapeCodeforcesProfile };

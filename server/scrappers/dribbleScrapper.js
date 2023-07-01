// scraper.js

const puppeteer = require('puppeteer');

async function scrapeDribbbleProfile(username) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = `https://dribbble.com/${username}`;
    await page.goto(url);

    await page.waitForSelector('.work');
    await page.waitForSelector('.shot-thumbnail-title');
    await page.waitForSelector('.shot-thumbnail-image');
    await page.waitForSelector('.skill-name');

    const workDetails = await page.$eval('.work-details', (element) => element.textContent.trim());
    const projects = await page.$$eval('.shot-thumbnail-title', (elements) =>
      elements.map((element) => element.textContent.trim())
    );
    const likedShots = await page.$$eval('.shot-thumbnail-image', (elements) =>
      elements.map((element) => element.src)
    );
    const skills = await page.$$eval('.skill-name', (elements) =>
      elements.map((element) => element.textContent.trim())
    );

    await browser.close();

    const scrapedData = {
      workDetails,
      projects,
      likedShots,
      skills,
    };

    return scrapedData;
  } catch (error) {
    throw error;
  }
}

module.exports = { scrapeDribbbleProfile };

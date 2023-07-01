const puppeteer = require('puppeteer');

async function scrapeDribbbleProfile(username) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = `https://dribbble.com/${username}`;
    await page.goto(url);

    await page.waitForSelector('.work');
    await page.waitForSelector('.projects');
    await page.waitForSelector('.collections');
    await page.waitForSelector('.liked');

    const works = await page.$eval('.work .count', element => element.textContent.trim());
    const projects = await page.$eval('.projects .count', element => element.textContent.trim());
    const collections = await page.$eval('.collections .count', element => element.textContent.trim());
    const likedShots = await page.$eval('.liked .count', element => element.textContent.trim());

    console.log(works);
    console.log(projects);
    console.log(collections);
    console.log(likedShots);
    // console.log('Work Details:', workDetails);
    // console.log('Projects:', projects);
    // console.log('Collections:', collections);
    // console.log('Liked Shots:', likedShots);

    await browser.close();

    const scrapedData = {
      works,
      projects,
      collections,
      likedShots,
    };

    return scrapedData;
  } catch (error) {
    throw error;
  }
}

module.exports = { scrapeDribbbleProfile };

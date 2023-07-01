const puppeteer = require('puppeteer');

const scrapeGitHubUserDetails=async(req,res)=> {

    const {githubUser}=req.body;
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();

  try {
    const userUrl = `https://github.com/${githubUser}`;
    await page.goto(userUrl);

    // Wait for necessary elements to load
    await page.waitForSelector('h1.vcard-names');
    await page.waitForSelector('.vcard-details');
    await page.waitForSelector('.UnderlineNav-body');
    await page.waitForSelector('.js-yearly-contributions');

    // Extract user details
    const name = await page.$eval('h1.vcard-names', (element) => element.textContent.trim());
    const details = await page.$$eval('.vcard-details li', (elements) =>
      elements.map((element) => element.textContent.trim())
    );
    // Extract number of repositories
    const repoCount = await page.$eval('.UnderlineNav-body .Counter', (element) => element.textContent.trim());

    // Extract languages used in contributions
    const languages = await page.evaluate(() => {
        const languageElements = document.querySelectorAll('.ContributionCalendar .js-calendar-graph-svg rect.ContributionCalendar-day');
        const languageMap = {};
        const languages = [];
  
        for (const element of languageElements) {
          const color = element.getAttribute('data-level');
          const language = element.getAttribute('aria-label');
  
          if (color && language && !languageMap[color]) {
            languageMap[color] = true;
            languages.push(language);
          }
        }
  
        return languages;
      });

    // Extract number of contributions
    const contributionCount = await page.$eval('.js-yearly-contributions h2', (element) => {
        const text = element.textContent.trim();
        return text.split(' ')[0]; // Extracting the numeric part of the text
        });



    console.log('Name:', name);
    console.log('Details:', details);
    console.log('Number of Repositories:', repoCount);
    console.log('Languages Used:', languages);
    console.log('Number of Contributions:', contributionCount);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await browser.close();
  }
}

// Replace 'github-username' with the actual username you want to scrape
scrapeGitHubUserDetails('sjsakib');

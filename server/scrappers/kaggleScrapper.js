const puppeteer = require('puppeteer');

async function scrapeKaggleProfile(username) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const url = `https://www.kaggle.com/${username}`;
        await page.goto(url);

        await page.waitForSelector('.pageheader__nav-wrapper');

        const competitions = await page.$eval('#pageheader-nav-item--competitions .pageheader__link-count span', element => element.textContent.trim());

        const datasets = await page.$eval('#pageheader-nav-item--datasets .pageheader__link-count span', element => element.textContent.trim());

        const code = await page.$eval('#pageheader-nav-item--code .pageheader__link-count span', element => element.textContent.trim());

        const discussions = await page.$eval('#pageheader-nav-item--discussion .pageheader__link-count span', element => element.textContent.trim());

        const discussionSummary = await page.$eval('.achievement-summary__rank-box--current .achievement-summary__rank-text', element => element.textContent.trim()); //giving some other number instead of what is shown --to be fixed

        const discussionSummaryBottom = await page.$eval('.achievement-summary__rank-box--current .achievement-summary__rank-label--bottom', element => element.textContent.trim()); //giving some other number instead of what is shown --to be fixed

        const followers = await page.$eval('#pageheader-nav-item--followers .pageheader__link-count span', element => element.textContent.trim());



        console.log('Competitions:', competitions);
        console.log('Datasets:', datasets);
        console.log('Code:', code);
        console.log('Discussions:', discussions);
        console.log('DiscussionSummary:', discussionSummary);
        console.log('DiscussionSummaryBottom:', discussionSummaryBottom);
        console.log('Followers:', followers);

        await browser.close();

        const scrapedData = {
            competitions,
            code,
            datasets,
            discussions,
            discussionSummary,
            discussionSummaryBottom,
              followers,
            //   notebooks,
        };

        return scrapedData;
    } catch (error) {
        throw error;
    }
}

module.exports = { scrapeKaggleProfile };

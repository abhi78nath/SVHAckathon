const puppeteer = require('puppeteer');

async function scrapeLinkedInProfile(url) {
  const browser = await puppeteer.launch({ headless:"new" });
  const page = await browser.newPage();

  try {
    await page.goto(url);

    // Wait for necessary elements to load
    await page.waitForSelector('.pv-recent-activity-section');

    // Extract number of followers
    const followerCountElement = await page.$('.pv-recent-activity-section .pv-recent-activity-section__follower-count');
    const followerCount = await followerCountElement.evaluate(element => element.textContent.trim());

    // Extract number of posts
    const postCountElement = await page.$('.pv-recent-activity-section .pv-recent-activity-section__post-count');
    const postCount = await postCountElement.evaluate(element => element.textContent.trim());

    // Extract experience
    const experienceElement = await page.$('.pv-entity__position-group');
    const experience = await experienceElement.evaluate(element => element.textContent.trim());

    // Extract licenses & certifications
    const licenseElements = await page.$$('.pv-certifications-section .pv-certification-entity');
    const licenses = await Promise.all(licenseElements.map(async element => {
      const titleElement = await element.$('.pv-certification-name');
      const title = await titleElement.evaluate(el => el.textContent.trim());
      return title;
    }));

    const profileData = {
      followerCount,
      postCount,
      experience,
      licenses
    };

    return profileData;
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await browser.close();
  }
}

// Usage example
scrapeLinkedInProfile('https://www.linkedin.com/in/sudip-prusty-18009a219/')
  .then(data => console.log(data))
  .catch(error => console.error(error));

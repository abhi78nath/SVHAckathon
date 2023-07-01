const express = require('express');
const { scrapeDribbbleProfile } = require('./scrappers/dribbleScrapper');

const app = express();
const port = 5000;

const username = 'stepanovdesign';

app.get('/', async (req, res) => {
  try {
    const data = await scrapeDribbbleProfile(username);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});

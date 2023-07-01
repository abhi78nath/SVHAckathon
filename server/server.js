const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const { scrapeDribbbleProfile } = require('./scrappers/dribbleScrapper');
const { scrapeKaggleProfile } = require('./scrappers/kaggleScrapper');
const { scrapeCodeforcesProfile } = require('./scrappers/codeforcesScrapper');


// dotenv.config();
// connectDB();
const app = express();

app.use(cors());
app.use(express.json()); // to accept json data

// let username = 'stepanovdesign'
let usernamedrib = 'moova_agency'
let usernamekag = 'redwankarimsony'
let usernamecf = 'jiangly'

app.get('/', (req,res) => {
  res.send("Welcome");
})

app.get('/dribble', async (req, res) => {
  try {
    const data = await scrapeDribbbleProfile(usernamedrib);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/kaggle', async (req, res) => {
  try {
    const data = await scrapeKaggleProfile(usernamekag);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
})

app.get('/codeforces', async (req, res) => {
  try {
    const data = await scrapeCodeforcesProfile(usernamecf);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
})

app
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);
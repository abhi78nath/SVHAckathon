const express = require("express");
const { connectToDatabase } = require('./config/db');
const cors = require("cors");
const dribbble = require('./router/scrapperRouter/dribbble');
// const { scrapeCodeforcesProfile } = require('./scrappers/codeforcesScrapper');
const { scrapeDribbbleProfile } = require('./scrappers/dribbleScrapper');
const { scrapeKaggleProfile } = require('./scrappers/kaggleScrapper')
// const kaggle = require('./router/scrapperRouter/kaggle')
// const cf = require('./router/scrapperRouter/cf')
const kaggle = require('./router/scrapperRouter/kaggle')
const cf = require('./router/scrapperRouter/cf')
const gitroute=require('./router/scrapperRouter/git');
const employerAuth = require('./router/AuthRoutes/Employer')
const candidateAuth = require('./router/AuthRoutes/Candidate')
const candidatedetail = require('./router/Details/Candidate')
const candidateProfile = require('./router/Profile/CandidateProfile');
const { scrapeGitHubUserDetails } = require("./scrappers/github");




const app = express();

app.use(cors());
app.use(express.json()); // to accept json data

connectToDatabase();

// let username = 'stepanovdesign'
let usernamedrib = 'moova_agency'
let usernamekag = 'thedevastator'
let usernamecf = 'jiangly'
let usernamegit = 'abhi78nath'

app.get('/', (req,res) => {
  res.send("Welcome");
})

// app.use('/', dribbble);
// app.use('/', kaggle);
// app.use('/', cf);
// app.use('/',gitroute)
app.use('/employer', employerAuth);
app.use('/candidate', candidateAuth);
app.use('/candidate', candidatedetail);
app.use('/candidate', candidateProfile)



// app.get('/codeforces', async (req, res) => {
//   try {
//     const data = await scrapeCodeforcesProfile(usernamecf);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// })
// app.get('/kaggle', async (req, res) => {
//   try {
//     const data = await scrapeKaggleProfile(usernamekag);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// })
app.get('/git', async (req, res) => {
  try {
    const data = await scrapeGitHubUserDetails('abhi78nath');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));

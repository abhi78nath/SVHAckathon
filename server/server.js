const express = require("express");
const { connectToDatabase } = require('./config/db');
const cors = require("cors");
const dribbble = require('./router/scrapperRouter/dribbble');
const kaggle = require('./router/scrapperRouter/kaggle')
const cf = require('./router/scrapperRouter/cf')
const gitroute=require('./router/scrapperRouter/git');
const employerAuth = require('./router/AuthRoutes/Employer')
const candidateAuth = require('./router/AuthRoutes/Candidate')




const app = express();

app.use(cors());
app.use(express.json()); // to accept json data

connectToDatabase();



app.get('/', (req,res) => {
  res.send("Welcome");
})

app.use('/', dribbble);
app.use('/', kaggle);
app.use('/', cf);
app.use('/',gitroute)
app.use('/employer', employerAuth);
app.use('/candidate', candidateAuth);



// app.get('/codeforces', async (req, res) => {
//   try {
//     const data = await scrapeCodeforcesProfile(usernamecf);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// })
// app.get('/dribbble', async (req, res) => {
//   try {
//     const data = await scrapeDribbbleProfile(usernamedrib);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));

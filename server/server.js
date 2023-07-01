const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const { scrapeDribbbleProfile } = require('./scrappers/dribbleScrapper');


dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json()); // to accept json data

app.get('/', async (req, res) => {
  try {
    const data = await scrapeDribbbleProfile(username);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);
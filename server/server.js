const express = require("express");
// const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const { scrapeDribbbleProfile } = require("./scrappers/dribbleScrapper");
const {scrapeGitHubUserDetails}=require("./scrappers/github");
// const gitRo

dotenv.config();
// connectDB();
const app = express();

app.use(cors());
app.use(express.json()); // to accept json data

app.get("/dribble", async (req, res) => {
  try {
    const data = await scrapeDribbbleProfile("moova_agency");
    res.json(data);
    console.log(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// app.get("/git", async (req, res) => {
//   try {
//     const data = await scrapeGitHubUserDetails("bikdistinct");
//     res.json(data);
//     console.log(data);
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

app.use("/api/git", require("./routes/gitroutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));

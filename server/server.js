const express = require("express");
const { connectToDatabase } = require('./config/db');
const cors = require("cors");
const dribbble = require('./router/scrapperRouter/dribbble');
const kaggle = require('./router/scrapperRouter/kaggle')
const cf = require('./router/scrapperRouter/cf')
const gitroute=require('./router/scrapperRouter/git');



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

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));

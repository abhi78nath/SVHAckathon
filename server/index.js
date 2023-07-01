const express = require('express')

const app = express();

const port = 5000;

app.get('/' , (req, res)=> {
    res.send("Welcome")
})
app.listen(port, (req,res) => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
})
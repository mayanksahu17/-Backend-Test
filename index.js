const express = require("express")
const app = express();

require('dotenv').config();
const port =  process.env.PORT || 3000;

app.get('/', (req, res) =>{
res.send("Hello World")
})

app.get('/login', (req, res) =>{
    res.send("please login at http")
    })

app.get('/youtube', (req, res) =>{
    res.send("<h2> Welcome to youtube <h2/>")
    })

app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
})
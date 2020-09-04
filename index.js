const express = require("express");
const app = express();
let port = process.env.PORT || 3000 ;
const importData = require('./db.json');

app.get("/", (req, res) =>{
    res.send('Hello World');
    res.send(importData);
});
app.get("/players", (req, res) =>{
    res.send(importData);
});

app.listen(port , ()=>{
    console.log('its listennign on piet')
})
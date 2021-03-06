const express = require("express");
const app = express();
let port = process.env.PORT || 3000 ;
const importDishes = require('./dishes.json');
const importComment = require('./comment.json')
const importFeedback = require('./db.json')
const importPromo = require('./promo.json')
const importLeader = require('./leader.json')
const cors =require('cors');
app.use(cors({
    origin : "https://restaurant-4e27e.web.app"
}));

app.use(express.static('public'));

app.get("/", (req, res) =>{
    res.send('Hello World');
});

app.get("/dishes", (req, res) =>{
    res.send(importDishes);
});
app.get("/promotions", (req, res) =>{
    res.send(importPromo);
});
app.get("/leaders", (req, res) =>{
    res.send(importLeader);
});
app.get("/feedbacks", (req, res) =>{
    res.send(importFeedback);
});
app.get("/comments", (req, res) =>{
    res.send(importComment);
});

app.listen(port , ()=>{
    console.log('its listennign....')
})
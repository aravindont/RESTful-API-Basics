const express=require('express');
require('dotenv').config();
const app=express();
const database=require('./config/database-connect');
const bodyParser=require('body-parser');
const ejs=require('ejs');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));
database().then(console.log("connected to DB"))
.catch(err => console.log(err))

const Article=require('./models/database');

app.get("/",async function(req,res) {
    const data=await Article.find();
    res.send(data);
   
})
module.exports=app


//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',function(req,res){
  res.render("home",{home: "active"});
});

app.get('/about',function(req,res){
  res.render("about",{about: "active"});
});

app.get('/news',function(req,res){
  res.render("news",{news: "active"});
});

app.get('/gallery',function(req,res){
  res.render("gallery",{gallery: "active"});
});

app.get('/donate',function(req,res){
  res.render("donate",{donate: "active"});
});

app.post('/donate',function(req,res){
  let username= req.body.u_name;
  let password= req.body.u_pass;
  let x= Number(req.body.u_amout);
  if(x>0 && password && username.length>0){
    res.render("success",{name: username});
  }else{
    res.render("failure");
  }
});

app.post('/failure',function(req,res){
  res.redirect('/donate');
});

app.get('/branches',function(req,res){
  res.render("branches",{branches: "active", api_key: process.env.API_KEY});
});



app.listen(process.env.PORT || 3000,function(){
  console.log("Server is running at port 3000");
});

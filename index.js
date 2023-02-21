const express = require('express');
const app = express();
// const fs = require('fs');
// const path = require('path');

app.get("/",(req,res)=>{
    res.send(" I am on the home page")
    res.end();
})

app.get("/gallery",(req,res)=>{
    res.send(" I am on the gallery")
    res.end();
})

app.post("/submit",(req,res)=>{
  res.send("post worked")
  res.end()
})

app.listen(8000,()=>{
    console.log("Application is running")
});
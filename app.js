require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const port = 3000; 

const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');


mongoose.connect('mongodb+srv://rakshitgondwal:chitkararakshit@cluster0.rtnxftk.mongodb.net/technovation',{
  useNewUrlParser : true
});

const jobSchema = new mongoose.Schema({
    name : String,
    jobName : String,
    jobDescription : String,
    location : String,
    requirement : String,
    contact : String,
    email : String,
    salary : String,
    wage : String
  });


const applySchema = new mongoose.Schema({
    name : String,
    age : String,
    contact : String,
    location : String,
    about : String
});

const Job = mongoose.model("Job", jobSchema);

const Apply = mongoose.model("Apply", applySchema);

app.get("/", function(req,res){
    res.send("Hi");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
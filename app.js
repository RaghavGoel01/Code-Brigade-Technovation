require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const port = 3000; 

const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost:27017/technovation');

const jobSchema = new mongoose.Schema({
    name : String,
    jobName : String,
    jobDescription : String,
    location : String,
    requirement : String,
    contact : String,
    email : String,
    wage : String
  });


const applySchema = new mongoose.Schema({
    name : String,
    age : String,
    contact : String,
    location : String,
    about : String
});

const questionsSchema = new mongoose.Schema({
    name : String,
    description : String
});

const feedbackSchema = new mongoose.Schema({
    mail : String ,
    subject : String,
    description : String
});

const Job = mongoose.model("Job", jobSchema);

const Apply = mongoose.model("Apply", applySchema);

const Question = mongoose.model("Question", questionsSchema);

const Feedback = mongoose.model("Feedback", feedbackSchema);

app.get("/", function(req,res){
   res.sendFile(__dirname + '/pages/index.html')
});

app.get("/question", function(req,res){
  res.sendFile(__dirname + '/pages/question.html')
});

app.get("/feedback", function(req,res){
  res.sendFile(__dirname + '/pages/feedback.html')
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
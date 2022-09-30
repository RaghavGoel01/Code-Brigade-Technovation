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

const Job = mongoose.model("Job", jobSchema);

const Apply = mongoose.model("Apply", applySchema);

app.get("/", function(req,res){
    const job = new Job({
        name : "Rakshit",
        jobName : "Developer",
        jobDescription : "To maintain website",
        location : "Chandigarh",
        requirement : "1 year of experience",
        contact : "1234",
        email : "123@gmail.com",
        wage : "2000"
      });
      
      job.save();
    
    
      const apply = new Apply({
        name : "Raghav",
        age : "18",
        contact : "1234567",
        location : "Haryana",
        about : "Good boy"
      });
      
      apply.save();

      res.send("Success!")
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
const express = require("express");
const path = require("path");
const passport = require('passport');
const mongoose = require('mongoose');
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const db = require("./models");
require('./config/passport');

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lottotracker", { useNewUrlParser: true });
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Database connection Error', err);
});

// need to fetch latest result from db, OR from external api then save result to db
// extrernal api example: https://www.calottery.com/api/DrawGameApi/DrawGamePastDrawResults/8/1/20
// params: 8 = supperlotto, 1 = page one results, 20 = # of results per page


// Define API routes here
app.use(require('./routes'));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



require("dotenv").config();
var axios = require("axios")
var fs = require("fs");
var moment = require("moment");
moment().format("MM/DD/YYY");
var keys = require("./keys.js");
// "var Spotify" is reading keys.js //
var Spotify = require("node-spotify-api");
// "var inquire" is initializing the pkg needed to grab user input //
var inquirer = require("inquirer");
var spotify = new Spotify(keys.spotify);

var search = process.argv[2]
// console.log(search);

var term = process.argv.slice(3).join(" ");
// console.log(term);
// The search parameters for Spotify //
if (search === "spotify") {
  console.log("searching for a song...");
  spotify.search({ type: 'track', query: term }, function(err, response) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  console.log("Artist: ", response.tracks.items[0].artists[0].name);
  console.log("Song Title: ", response.tracks.items[0].name);
  console.log("Preview Link: ", response.tracks.items[0].preview_url);
  console.log("Album Name: ", response.tracks.items[0].album.name);
  // console.log(response.tracks.items[0].name); 
  });

// Search parameters for OMDB **the "if" portion of the else statement narrows the type of search commands to only spotify or movie** //
} else if (search === "movie") {
  console.log("searching for a movie...");
  var URL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
// using axios to grab the URL variable //
  axios.get(URL).then(function (response) {
    console.log("here's your movie info: ", response.data.Title);
    console.log("Released: ", response.data.Year);
    console.log("IMDB Rating: ", response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: ", response.data.Ratings[1].Value);
    console.log("Country: ", response.data.Country);
    console.log("anguage: ", response.data.Language);
    console.log("Plot: ", response.data.Plot);
    console.log("Actors: ", response.data.Actors);
  });
} else if (search === "concert") {
  var bitURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";

    axios.get(bitURL).then(function (response) {
      console.log(response.data[0].venue.name);
      console.log(response.data[0].venue.country);
    // The date and time for the concert command are working, but implementing momentjs is proving to be a struggle //
      console.log(response.data[0].datetime);
    })
  }


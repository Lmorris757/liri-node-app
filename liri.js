require("dotenv").config();
var fs = require("fs");
var Spotify = require("node-spotify-api");
fs.readFile("./keys.js", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
})
var spotify = new Spotify(keys.spotify);

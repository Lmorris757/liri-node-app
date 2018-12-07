

require("dotenv").config();
var axios = require("axios")
var fs = require("fs");
var keys = require("./keys.js");
// "var Spotify" is reading keys.js //
var Spotify = require("node-spotify-api");
// "var inquire" is initializing the pkg needed to grab user input //
var inquirer = require("inquirer");
var spotify = new Spotify(keys.spotify);

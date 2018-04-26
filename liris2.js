
require('dotenv').config()

// require some requirements
var Twitter = require('twitter');
var Spotify = require("node-spotify-api" );
var keys= require("./keys.js");
var request = require("request");
var twitterData = require("./keys.js");
var fs = require("fs");
var Twit = require('twit')
var client = new Twitter(keys.twitter)

//***********twitter********
//get into my acoounts using my keys
//get the datas()
function mytweet(){
    var client = new Twitter(keys.twitter);
    var params = {
        screen_name: "only_tell_truth"
      };
      client.get("statuses/user_timeline", params, function(error, tweets, response) {
        if (!error) {
          for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].created_at);
            console.log("");
            console.log(tweets[i].text);
          
          }
        }
    });
  }
//variables to grab action to be perform
var action = process.argv[2];
if(action === "showtweets") {
    mytweet();
} 
if (action === "showsongs") {
  myMusic();
  tweeterBot();
  console.log('user type show song');
}
if(action === "do-what-it-says"){
  doSays();
}

   // If the request is successful (i.e. if the response status code is 200)
  
   
     // Parse the body of the site and recover

//      console.log("I t: " + (JSON.stringify(tweets)));
//    }
//    });
         function tweeterBot (){
          fs.writeFile("twitter-bot", tweets, function(err) {
   
             // If the code experiences any errors it will log the error to the console.
             if (err) {
               return console.log(err);
             }
           
             // Otherwise, it will print: "movies.txt was updated!"
             console.log("");
            
           });   

 }

//**********spotify**********
function myMusic(){
var spotify = new Spotify(keys.spotify);

var song = process.argv[3];
console.log(song);
spotify
  .search({ type: 'track', query: song })
  .then(function(response) {
    console.log(response.tracks.items[0]);
    console.log("Song Name: "+ response.tracks.items[0].name);
    console.log("Album name: "+response.tracks.items[0].album.name);
    console.log("Artist Name: "+response.tracks.items[0].album.artists[0].name);
    console.log("Release Date: "+response.tracks.items[0].album.release_date);
   
  //   for (var i = 0; i < response.length; i++) {
  //     console.log(response[i].created_at);+
  //     console.log("");
  //     console.log(response[i].text);
  // console.log(response); 
  //   }
  })
  .catch(function(err) {
    console.log(err);
  });
  }


//***********movie********
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

    // If the request is successful 
    if (!error && response.statusCode === 200) {
  
    
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
  });


  //*********************** Do what it says */
  function doSays(){
    fs.readFile("random.text","utf8",function(err,data){
      if(err){
        return console.log(err);
      }
      var actionArr = data.split(',');
      var spotify = new Spotify(keys.spotify);

      var song = actionArr[1];
console.log(song);
spotify
  .search({ type: 'track', query: song })
  .then(function(response) {
   // console.log(response.tracks.items[0]);
    console.log("Song Name: "+ response.tracks.items[0].name);
    console.log("Album name: "+response.tracks.items[0].album.name);
    console.log("Artist Name: "+response.tracks.items[0].album.artists[0].name);
    console.log("Release Date: "+response.tracks.items[0].album.release_date);
  })
  .catch(function(err) {
    console.log(err);
  });
    });
  }
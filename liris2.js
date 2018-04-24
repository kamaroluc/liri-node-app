
require('dotenv').config()

// requ
var Twitter = require('twitter');
var Spotify = require("node-spotify-api" );
var keys= require("./keys.js");
var request = require("request");
var twitterData = require("./keys.js");
var fs = require("fs");
var Twit = require('twit')
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// var spotify = new Spotify(keys.spotify);



//empty array to grad data
// var mytweet = "";
//twitter
//***********twitter********
// action = new Twitter({
//         consumer_key: twitterData.consumer_key,
//         consumer_secret: twitterData.consumer_secret,
//         access_token_key: twitterData.access_token_key,
//         access_token_secret: twitterData.access_token_secret
//     });

    // Build a string with my tweet.
    // mytweet = mytweet + " " + action[i];
    // console.log(mytweet)//  
    
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
        //  console.log("Tweets" +tweets);
//variable to grab action to be perform
var action = process.argv;
if(action[2]=== "showtweets"){
    mytweet();
}
   // If the request is successful (i.e. if the response status code is 200)
  
   
     // Parse the body of the site and recover

//      console.log("I t: " + (JSON.stringify(tweets)));
//    }
//    });
//           fs.writeFile("twitter-bot", tweets, function(err) {
   
//              // If the code experiences any errors it will log the error to the console.
//              if (err) {
//                return console.log(err);
//              }
           
//              // Otherwise, it will print: "movies.txt was updated!"
//              console.log("");
           
//            });   
// }
//***********movie********
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

    // If the request is successful 
    if (!error && response.statusCode === 200) {
  
    
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
  });
  
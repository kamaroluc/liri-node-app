// var request = require("request");
// var Spotify = require('node-spotify-api');
// var twitterData = require("./keys.js");
// var Twitter = require('twitter');


// // var spotify = new Spotify(keys.spotify);
// // var client = new Twitter(keys.twitter);

// //variable to grab action to be perform
// var action = process.argv;
// console.log(action);


// //twitter
// //***********twitter********
// if(action[0] === ""){
//     var user = new Twitter({
//         consumer_key: twitterData.consumer_key,
//         consumer_secret: twitterData.consumer_secret,
//         access_token_key: twitterData.access_token_key,
//         access_token_secret: twitterData.access_token_secret
//     });

//     var params = {screen_name:"node.js"};

//     user.get('search/tweets',{q:'only_tell_truth'}, function(err,tweets,res){
//         if(err){
//             console.log(err);
//         }
//         console.log("Tweets" +tweets);
//     });
// }




console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// exports.twitterKeys= {
//   consumer_key: 'ais7xWaMOuojeHidAw8ztV7B2',
//   consumer_secret: 'pFh394FsbWzdBlTaZAyazHALSFxHPuhLycgGk2yg0h4vvJwZcS',
//   access_token_key: '987217505411268608-8MGUqnwy14MAWZateyUgtmkyYmSQMdt',
//   access_token_secret: 'g5EzWs7G4FQnyVIyP1fHvAxTN7TFwFog3QW5AKz0piHS1'
// };

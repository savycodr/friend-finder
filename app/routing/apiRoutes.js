// LOAD DATA, this gets a hold of the Friends object
var FriendData = require("../data/friends.js");

module.exports = function(app) {

  // have a get that returns the friends in json
  app.get("/api/friends", function(req, res) {
    return res.json(FriendData);
  });

  // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. The response will hold the most compatible Friend.
  // Create New Friends - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    // get the sores for the new Friend
    var newFriendScores = newFriend.scores;


    console.log('A post has been received');
    // check that we got a hold of the Friend Object
    FriendData.printFriends();

    // get the array of Friend Objects
    var allFriends = FriendData.getFriends();

    // store the lowest compatibility number
    var lowestNumber = 100;

    // store the friend you are compatible with
    var bestFriend = {};

    // go through all of the Friend scores and see who is most comaptible
    for (var i=0; i<allFriends.length; i++){
      // store the compatibility number is only needed inside this loop
      var compatibility = 0;
      console.log("The Friend we are looking at now " + allFriends[i].name);
      var friendScores = allFriends[i].scores;
      // console.log("the friends scores we are looking at " + friendScores);
      // Cycle through all 10 scores
      for (var j=0; j<10; j++)
      {
        // console.log("Your friendScore is " + friendScores[j] + ". Your newFriendScore is " + newFriendScores[j]);
        var difference = Math.abs(friendScores[j] - newFriendScores[j]);
        // console.log("The difference is " + difference);
        // get the sum of the absolute of all the differences in score
        compatibility = compatibility + difference;
      }
        console.log("Your compatibility is " + compatibility);
      // if the combatibility score is less than the lowest number
      // you have found a better match
      if (compatibility <= lowestNumber)
      {
        lowestNumber = compatibility;
        console.log("the lowest number is " + lowestNumber);
        // Store the Friend that you are compatible with
        bestFriend = allFriends[i];
      } 

    }

    // Add the newFriend to the array of Friends
    FriendData.addFriend(newFriend.name, newFriend.photoUrl, newFriend.scores);

    console.log("Your best friend is "+ bestFriend.name);

    // We then display the JSON of the best friend to the users
    res.json(bestFriend);
  });
}

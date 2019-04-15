// LOAD DATA
var friendData = require("../data/friends");

module.exports = function(app) {

  // have a get that returns the friends in json
  // HLS we wont return all of the data here only the most compatible
  app.get("/api/friends", function(req, res) {
    return res.json(friendData);
  });

// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// Create New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;


  console.log(newFriend);

  // We then add the json the user sent to the character array
  //  if (tables.length <= 4)
  //  {
  //   tables.push(newTable);
  //   newTable.success = true;
  // } else {
  //   waitList.push(newTable);
  //   newTable.success = false;
  //  }

  // We then display the JSON to the users
  res.json(newFriend);
});
}

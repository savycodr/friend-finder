// This constuctor holds our data for all of our friends
function Friends(){

  // an array of Friend objects
  // will seed a few Friends
  this.friends = [ 
    new Friend("Sally","http://lorempixel.com/g/400/200/cats",
    [1,2,1,1,1,1,2,1,1,3]),
    new Friend("Roger","http://lorempixel.com/g/400/200/sports",
    [5,2,5,5,5,5,2,5,5,3])
  ];

  // a method to add a Friend to the array
  // parameters are String name, String photoUrl, Array of Ints scores
  this.addFriend = function(name, photoURL, scores)
  {
    var friend = new Friend(name, photoURL, scores)
    this.friends.push(friend);
  };

  // a method to print all of the friends
  this.printFriends = function(){
    for (var i=0; i<this.friends.length; i++)
    {
      this.friends[i].printFriend();
    }
  };

  // a method to return the array of Friend Objects
  this.getFriends = function(){
    return this.friends;
  };

}

// This constuctor holds our data for one friend
// parameters are String name, String photoUrl, Array of Ints scores
function Friend(name, photoUrl, scores ){
  this.name = name;
  this.photo = photoUrl;
  this.scores = scores;

  this.printFriend = function(){
    console.log("name: "  + this.name);
    console.log("photoUrl " + this.photo);
    console.log("scores: " + this.scores);
  };

}

// create a Friends object and export it
var friends = new Friends();
module.exports = friends;

// Test Case
//  var friends = new Friends();
//  friends.addFriend("Tim", "http:\\lala.com", [0,1,2,3,4,5,4,3,2,1]);
// friends.printFriends();


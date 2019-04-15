// Dependencies
// =============================================================
var path = require("path");


// This constuctor holds the methods for routing the html
// it takes a parameter of an express object.
module.exports = function(app) {

  this.app = app;

// A GET Route to `/survey` which should display the survey page.
  this.app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));    
  });

// A default, catch-all route that leads to `home.html` which displays the home page.
  // If no matching route is found default to home
  this.app.get("*", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
  
};


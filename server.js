// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
// Use 3000 if localhost. If Heroku, use whatever port it assigned you.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handle htmlRouting
require("./app/routing/htmlRoutes.js")(app);
// handle apiRouting
require("./app/routing/apiRoutes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

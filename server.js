// REQUIRED
// =================================================================
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;

// PARSE APPLICATION
// =================================================================
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONFIGURE HANDLEBARS
// =================================================================
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// IMPORT ROUTES
// =================================================================
var routes = require("./controllers/burgersController.js");
app.use(routes);

// START SERVER
// =================================================================
app.listen(PORT, function() {
  console.log("Listening on port:" , PORT);
});

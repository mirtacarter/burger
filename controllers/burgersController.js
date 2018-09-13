// REQUIRED
// =================================================================
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// ROUTING
// =================================================================
// Get
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// Post
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// Put
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
      res.sendStatus(200);
  });
});

// EXPORT
// =================================================================
module.exports = router;
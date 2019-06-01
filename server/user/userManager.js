var express = require("express");
var userManager = express.Router();

var db = require("../db");

var userScheme = new db.Schema(
  {
    name: String,
    age: Number,
    address: String
  },
  { collection: "user" }
);

var userModel = db.model("user", userScheme);

userManager
  .route("/")
  .get(function(req, res) {
    // console.log("userManager.get user");
    userModel.find((err, result) => {
      if (err) console.log(err);
      res.json(result);
    });
    // res.send("userManager get user");
  })
  .post(function(req, res) {
    new userModel({
      name: req.body.name,
      age: req.body.age,
      address: req.body.address
    }).save((err, result) => {
      if (err) console.log(err);
      console.log("Save user successfully");
    });
  })
  .put(function(req, res) {
    res.send("put method is not implemented.");
  });

module.exports = userManager;

var express = require("express");
var vocalbularyManager = express.Router();

var db = require("../db");

var vocalbularyScheme = new db.Schema(
  {
    english: String,
    chinese: String,
    pronunciation: String
  },
  { collection: "vocalbulary" }
);

var vocalbularyModel = db.model("vocalbulary", vocalbularyScheme);

vocalbularyManager
  .route("/")
  .get(function(req, res) {
    console.log("vocalbularyManager.get vocalbulary");
    vocalbularyModel.find((err, result) => {
      if (err) console.log(err);
      res.json(result);
    });
    // res.send("vocalbularyManager get vocalbulary");
  })
  .post(function(req, res) {
    new vocalbularyModel({
      english: req.body.english,
      chinese: req.body.chinese,
      pronunciation: req.body.pronunciation
    }).save((err, result) => {
      if (err) console.log(err);
      console.log("Save vocalbulary successfully");
    });
  })
  .put(function(req, res) {
    res.send("put method is not implemented.");
  });

module.exports = vocalbularyManager;

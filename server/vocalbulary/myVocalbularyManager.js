var express = require("express");
var myVocalbularyManager = express.Router();

var db = require("../db");


// memoryAid: string = '';
//   difficulty: number = 0;
//   lastTestTime: Date = new Date();
//   imageLink: string[] = [];


var myVocalbularyScheme = new db.Schema(
  {
    english: String,
    chinese: String,
    pronunciation: String,
    memoryAid: String,
    difficulty: Number,
    lastTestTime: Date,
    imageLink: Array
  },
  { collection: "myvocalbulary" }
);

var myVocalbularyModel = db.model("myvocalbulary", myVocalbularyScheme);

myVocalbularyManager
  .route("/")
  .get(function(req, res) {
    // console.log("myVocalbularyManager.get myvocalbulary");
    myVocalbularyModel.find((err, result) => {
      if (err) console.log(err);
      res.json(result);
    });
    // res.send("myVocalbularyManager get myvocalbulary");
  })
  .post(function(req, res) {
    new myVocalbularyModel({
      english: req.body.english,
      chinese: req.body.chinese,
      pronunciation: req.body.pronunciation,


      memoryAid: req.body.memoryAid,
      difficulty: req.body.difficulty,
      lastTestTime: req.body.lastTestTime
      // imageLink: Array

    }).save((err, result) => {
      if (err) console.log(err);
      console.log("Save myvocalbulary successfully");
    });
  })
  .put(function(req, res) {
    res.send("put method is not implemented.");
  });

module.exports = myVocalbularyManager;

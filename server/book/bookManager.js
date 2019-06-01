// var mongoose = require('mongoose');
// mongoose.connect();

var express = require("express");

var bookManager = express.Router();

bookManager
  .route("/")
  .get(function(req, res) {
    // console.log("book.find()");
    res.send("list books");
    // user.find((err, result) => {
    //   res.json(result);
    // });
  })
  .post(function(req, res) {
    res.send("add book");
  })
  .put(function(req, res) {
    res.send("update book");
  });

bookManager.get("/:id", function(req, res) {
  res.send("Get book id = " + req.params.id);
});

// app.post("/user", function(req, res) {
//   new userModel({
//     name: req.body.name,
//     age: req.body.age,
//     address: req.body.address
//   }).save((err, result) => {
//     if (err) console.log(err);
//     console.log("Save user successfully");
//   });
// });

// app.get("/adduser", function(req, res) {
//   var Cucu = new userModel({
//     name: "Ducu",
//     age: 18,
//     address: "USA"
//   });

//   console.log(Cucu.name);

//   Cucu.save((err, Cucu) => {
//     if (err) console.log(err);
//     // Cucu.hello();
//     res.send("save user successfully");
//   });
// });

module.exports = bookManager;

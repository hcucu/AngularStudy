// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/mydb");
// module.exports = mongoose;
// module.exports.Schema = mongoose.Schema;

//require mongoose module
var mongoose = require("mongoose");

//require chalk module to give colors to console text
var chalk = require("chalk");

//require database URL from properties file
var dbURL = require("./property").db;
// var dbURL = "mongodb://localhost:27017/mydb";

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

//export this function and imported by server.js
// module.exports.conn =function(){

mongoose.connect(dbURL);

mongoose.connection.on("connected", function() {
  console.log(connected("Mongoose default connection is open to ", dbURL));
});

mongoose.connection.on("error", function(err) {
  console.log(
    error("Mongoose default connection has occured " + err + " error")
  );
});

mongoose.connection.on("disconnected", function() {
  console.log(disconnected("Mongoose default connection is disconnected"));
});

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      termination(
        "Mongoose default connection is disconnected due to application termination"
      )
    );
    process.exit(0);
  });
});

module.exports = mongoose;
// }

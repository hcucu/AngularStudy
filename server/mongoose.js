var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb");
var db = mongoose.connect;

// db.on('error', console.log("connect to database error."));
// db.on('open', () => {
//   console.log("database is connected.");
// })

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String
});

// do not use => which preventing binding 'this.'
UserSchema.methods.hello = function() {
  console.log("Hello %s", this.name);
}

var userModel = mongoose.model('User', UserSchema);

module.exports = db;

// var Cucu = new User({
//   name: 'Ducu',
//   age: 18,
//   address: 'USA'
// });

// console.log(Cucu.name);

// Cucu.save((err, Cucu) => {
//   if (err) console.log(err);
//   Cucu.hello();
// });

const cors = require("cors"); //<-- required installing 'cors' (npm i cors --save)
const express = require("express");
const app = express();
app.use(cors()); //<-- That`s it, no more code needed!

// 引入json解析中间件
var bodyParser = require('body-parser');

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 允许所有的请求形式
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//  将静态文件(html文件，图片，等资源放到static目录，该目录可以自己创建)
//  app.use(express.static(path.join(__dirname, 'static')));

// connect to database
const dbo = require("mongoose");
dbo.connect("mongodb://localhost:27017/mydb");

// create schema
const userSchema = new dbo.Schema(
  {
    name: String,
    age: Number,
    address: String
  },
  { collection: "user" }
);

// create model from schema
const userModel = dbo.model("user", userSchema);

app.get("/", function(req, res) {
  res.send("Hello world!");
});

app.get("/user*", function(req, res) {
  console.log("user.find()");
  userModel.find((err, result) => {
    // console.log(result.toString());
    res.json(result);
  });
});

app.get("/test", function(req, res) {
  res.json("Express request test");
});

app.get("/users/:id", function(req, res) {
  res.send("Get user id = " + req.params.id);
});

app.post("/user", function(req, res) {
  // res.json(req);
  // console.log(req.body);

  (new userModel({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address
  })).save((err, result) => {
    if (err) console.log(err);
    console.log("Save user successfully");
  })
})

app.get("/adduser", function(req, res) {
  var Cucu = new userModel({
    name: "Ducu",
    age: 18,
    address: "USA"
  });

  console.log(Cucu.name);

  Cucu.save((err, Cucu) => {
    if (err) console.log(err);
    // Cucu.hello();
    res.send("save user successfully");
  });
});

app.get("/test*", function(req, res) {
  console.log("/test* GET request");
  res.send("This is test.");
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("server started at http://%s:%s", host, port);
});

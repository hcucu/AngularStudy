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

app.get("/", function(req, res) {
  res.send("Hello world!");
});

app.use("/vocalbulary", require("./vocalbulary/vocalbularyManager"));
app.use("/myvocalbulary", require("./vocalbulary/myVocalbularyManager"));

// var userManager = require("./user/userManager");
app.use("/user", require("./user/userManager"));

// var bookManager = require("./book/bookManager");
app.use("/book", require("./book/bookManager"));

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("server started at http://%s:%s", host, port);
});

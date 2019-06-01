// var express = require("express");
// var vocalbularyManager = express.Router();

const LIB = [
  {english: 'ferroelectric', chinese: ' n.[电]铁电物质adj.铁电的', pronounciation: ''},
  {english: 'cortin', chinese: ' n.肾上腺皮质激素', pronounciation: ''},
  {english: 'licensure', chinese: ' n.发给许可证', pronounciation: ''},
  {english: 'brent', chinese: 'n.[动]黑雁', pronounciation: ''},
  {english: 'manubrium', chinese: '柄,柄状突起柄状体', pronounciation: ''},
  {english: 'landmass', chinese: ' n.大片陆地', pronounciation: ''},
  {english: 'spent', chinese: ' adj.用尽的,精疲力尽的,失去效能的', pronounciation: ''},
  {english: 'peristome', chinese: ' n.口缘,开口部', pronounciation: ''},
  {english: 'remittance', chinese: ' n.汇款,汇寄之款,汇款额', pronounciation: ''},
  {english: 'Blackpool', chinese: '(英国城市名)黑潭', pronounciation: ''},
  {english: 'spendthrift', chinese: ' n.挥霍者', pronounciation: ''},
  {english: 'wintergreen', chinese: ' n.鹿蹄草', pronounciation: ''},
  {english: 'clutter', chinese: ' n.混乱', pronounciation: ''},
  {english: 'bibliographic', chinese: ' adj.书籍解题的,著书目录的', pronounciation: ''},
  {english: 'improvisation', chinese: ' n.即席创作', pronounciation: ''},
  {english: 'chancroid', chinese: ' n.[医]软性下疳', pronounciation: ''},
  {english: 'imperscriptible', chinese: '没有文件证明的，非正式的', pronounciation: ''},
  {english: 'annals', chinese: ' n.编年史,年报', pronounciation: ''},
  {english: 'chloramphenicol', chinese: ' n.[药]氯霉素', pronounciation: ''},
  {english: 'oxen', chinese: ' n.ox的复数', pronounciation: ''},
  {english: 'gameness', chinese: ' n.不认输,勇敢', pronounciation: ''},
  {english: 'chaff', chinese: ' n.谷壳,糠,愚弄v.戏弄,开玩笑', pronounciation: ''},
  {english: 'glossary', chinese: ' n.术语表', pronounciation: ''},
  {english: 'brassy', chinese: ' adj.象黄铜的,厚脸皮的n.铜头高尔夫球棍', pronounciation: ''},
  {english: 'doddle', chinese: ' n.轻而易举之事', pronounciation: ''},
  {english: 'dolly', chinese: ' n.<儿语>洋娃娃,捣棒vi.推移动车vt.捣', pronounciation: ''},
  {english: 'forcefully', chinese: ' adv.强有力地,激烈地', pronounciation: ''},
  {english: 'toner', chinese: ' n.调色剂,调色者', pronounciation: ''},
  {english: 'stroud', chinese: 'n.粗呢衣服,粗呢毯子', pronounciation: ''},
  {english: 'inefficiently', chinese: ' adv.无效率地', pronounciation: ''}
];

const MYLIB = [
  {english: 'improvisation', chinese: ' n.即席创作', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']},
  {english: 'clutter', chinese: ' n.混乱', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']},
  {english: 'chloramphenicol', chinese: ' n.[药]氯霉素', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']},
  {english: 'brent', chinese: 'n.[动]黑雁', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']},
  {english: 'stroud', chinese: 'n.粗呢衣服,粗呢毯子', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']},
  {english: 'Blackpool', chinese: '(英国城市名)黑潭', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']},
  {english: 'peristome', chinese: ' n.口缘,开口部', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']},
  {english: 'imperscriptible', chinese: '没有文件证明的，非正式的', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']},
  {english: 'remittance', chinese: ' n.汇款,汇寄之款,汇款额', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']},
  {english: 'manubrium', chinese: '柄,柄状突起柄状体', pronounciation: '', memoryAid: '', difficulty: 1, lastTestTime: new Date(), imageLink: ['']}
];


var db = require("../db");

var vocalbularyScheme = new db.Schema(
  {
    english: String,
    chinese: String,
    pronunciation: String
  },
  { collection: "vocalbulary" }
);

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

var vocalbularyModel = db.model("vocalbulary", vocalbularyScheme);
var myVocalbularyModel = db.model("myvocalbulary", myVocalbularyScheme);


var importLib = function (lib, insert){
  lib.forEach((x) => {
    JSON.stringify(x);
    // var v = new vocalbularyModel();
    // v.english = x.english;
    // v.chinese = x.chinese;
    // v.pronounciation = x.pronounciation;
    insert(x);
  });
}

var importVocalbulary = function() {
  importLib(LIB, (x) =>{
    var v = new vocalbularyModel();
    v.english = x.english;
    v.chinese = x.chinese;
    v.pronounciation = x.pronounciation;

    v.save((err, result) => {
      if (err) console.log(err);
    })
  });
}

var importMyVocalbulary = function() {
  importLib(MYLIB, (x) =>{
    var v = new myVocalbularyModel();
    v.english = x.english;
    v.chinese = x.chinese;
    v.pronounciation = x.pronounciation;
    v.memoryAid = x.memoryAid;
    v.difficulty = x.difficulty;
    v.lastTestTime = x.lastTestTime;
    v.imageLink = x.imageLink;

    v.save((err, result) => {
      if (err) console.log(err);
    })
  });
}

// importVocalbulary();
importMyVocalbulary();


// var importVocalbulary = function() {
//   LIB.forEach(x => {
//     JSON.stringify(x);
//     var v = new vocalbularyModel();
//     v.english = x.english;
//     v.chinese = x.chinese;
//     v.pronounciation = x.pronounciation;
//     v.save((err, result) => {
//       if (err) console.log(err);
//       // console.log("Save vocalbulary successfully");
//     })
//   });
// }

// var importMyVocalbulary = function() {
//   MYLIB.forEach(x => {
//     JSON.stringify(x);
//     var v = new vocalbularyModel();
//     v.english = x.english;
//     v.chinese = x.chinese;
//     v.pronounciation = x.pronounciation;
//     v.save((err, result) => {
//       if (err) console.log(err);
//       // console.log("Save vocalbulary successfully");
//     })
//   });
// }

// v.english =
// new vocalbularyModel({
//   english: req.body.english,
//   chinese: req.body.chinese,
//   pronunciation: req.body.pronunciation
// }).save((err, result) => {
//   if (err) console.log(err);
//   console.log("Save vocalbulary successfully");
// });


// vocalbularyManager
//   .route("/")
//   .get(function(req, res) {
//     // console.log("vocalbularyManager.get vocalbulary");
//     vocalbularyModel.find((err, result) => {
//       if (err) console.log(err);
//       res.json(result);
//     });
//     // res.send("vocalbularyManager get vocalbulary");
//   })
//   .post(function(req, res) {
//     new vocalbularyModel({
//       english: req.body.english,
//       chinese: req.body.chinese,
//       pronunciation: req.body.pronunciation
//     }).save((err, result) => {
//       if (err) console.log(err);
//       console.log("Save vocalbulary successfully");
//     });
//   })
//   .put(function(req, res) {
//     res.send("put method is not implemented.");
//   });

// module.exports = vocalbularyManager;



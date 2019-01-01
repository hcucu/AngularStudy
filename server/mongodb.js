const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;

  console.log("Mongodb connected.");
  // TestAdd();
  DbTestAdd(db);
  closeDb(db);
  console.log("Database closed.");
})

function DbTestAdd(db) {
  const user = {name : "zeze", age:"20", address:"567 Tiffany Blvd."};
  const dbo = db.db("TestDb");
  dbo.collection("User").insertOne(user, (err, db) => {
    if (err) throw err;
    console.log("insert user successfully.");
  })
}

function closeDb(db) {
  db.close();
}

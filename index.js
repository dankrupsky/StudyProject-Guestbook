const express = require('express')
const app = express()
const path = require("path");
const router = express.Router();
const port = 3000

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sp-guestbook";

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


router.get("/", (req, res) => {
  res.render("index");
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Create collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });


// Insert message
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "John", message: "Test-Test" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });


// Read
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var query = { address: "Park Lane 38" };
//   dbo.collection("customers").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// My example
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var query = { name: "John" };
//   dbo.collection("customers").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//     res.send('Hello World!' + '\n' + result[0].name + '\n' + result[0].message);
//   console.log("done");
//   });
// });

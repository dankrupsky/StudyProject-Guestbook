const express = require('express')
const app = express()
const port = 3000

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sp-guestbook";

app.get('/', (req, res) => {
  // DB Connection testing
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

  
  res.send('Hello World!')
  console.log("done");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

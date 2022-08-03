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

/*
** .env file example:
** mongoURI=mongodb://localhost:27017/test
*/

const express = require('express')
const app = express()
const path = require("path");
const router = express.Router();
const port = 3000
const pug = require('pug');
require('dotenv').config();

const comments = require('./routes/comment.routes.js')
const renderer = require('./routes/render.routes.js')


// DB init
const mongoose =  require("mongoose");
mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));



var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// const dataSample = require('./model/db.js');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sp-guestbook";

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.use("/", renderer);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// endpoints
app.use('/api/v1/comments', comments);

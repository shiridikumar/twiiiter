const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"


// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
const storage = require("./firebase");
const multer = require("multer");
const {
  ref,
  uploadBytes,
  listAll,
  deleteObject,
} = require("firebase/storage");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://shiridikumar:2002meshiridi@cluster0-shard-00-00.qozki.mongodb.net:27017,cluster0-shard-00-01.qozki.mongodb.net:27017,cluster0-shard-00-02.qozki.mongodb.net:27017/twiiter?ssl=true&replicaSet=atlas-z43jla-shard-0&authSource=admin&retryWrites=true&w=majority');
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

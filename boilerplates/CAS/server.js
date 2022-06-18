const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 4000;
const db_name = "temp_cas";


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const User = require('./models/user.model');


mongoose.connect("mongodb://127.0.0.1:27017/"+db_name, {
    useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection successfullly established");
})

app.listen(PORT, () => {
    console.log("Server is Running on port:", PORT)
})

app.get("/testAPI", (req, res) => {
    res.status(200).send("API is working");
})


app.post("/register", (req, res) => {
    const new_user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number,
        interests: req.body.interests
    })

    User.findOne({email: req.body.email}, (err, user) => {
        if(user){
            res.status(400).send({message: "User already registered"})
        }
    })
    new_user.save()
    .then((user) => {
        res.status(200).send({message: "User Successfully Registered"})
    })
    .catch((err) => {
        res.status(400).send({message: err})
    })
})
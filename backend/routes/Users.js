var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const posts=require("../models/Posts");

const postsAPI = require('./Posts');
router.use("/posts", postsAPI);


router.post("/tweet", (req, res) => {
   console.log(req.body);
   let mentions=[];
   let hashtags=[];
   if(req.body.hasOwnProperty("mentions")){
       mentions=req.body.mentions;
   }
   if(req.body.hasOwnProperty("hashtags")){
    hashtags=req.body.hashtags;
    console.log("hashtags");
}
   const post=new posts({
       tweettext:req.body.tweettext,
       url:"",
       timestamp:Date.now(),
       username:req.body.username,
       mentions:mentions,
       hashtags:hashtags
   })
   post.save().then(result=>{
       console.log("succesfully updated");
       res.send("succesful");

   })
   .catch(err=>{
       console.log(err);
       res.send("unsuccesful");
   })
   
}); 

router.post("/register", (req, res) => {
    /* Checking if the user already exists. */
    User.findOne({email: req.body.email}, (err, user) => {
        if(user){
            res.status(400).send({message: "User Already Exists"})
            return;
        }
    })
    new_user = new User({
        name: req.body.name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        interests: req.body.interests,
        phone_number: req.body.phone_number
    })
    var temp = req.body.email.split("@")
    if(temp.length != 2){
        res.status(400).send({message: "Invalid Email Format"});
        return;
    }

    if(temp[1].slice(-10) != "iiit.ac.in"){
        res.status(400).send({message: "The Website needs a IIITH email to log in"})
        return;
    }


    if(temp.length == 2 && temp[1].slice(-10))
    new_user.save()
    .then((user) => {
        res.status(200).send({message: "User Successfully added"})
    })
    .catch((err) => {
        res.status(400).send({message: err})
    })
})

router.post("/login", (req, res) => {
    console.log("asdasdasd");
    User.findOne({email: req.body.email}, (err, user) => {
        if(user){
            if(user.password == req.body.password){
                res.status(200).send({user:user,messgae:"succesful login"});
                return;
            }else{
                res.status(400).send({message: "Wrong Password"})
                return;
            }
        }

        if(err){
            res.status(400).send({message: err})
        }
    })
})


module.exports = router;


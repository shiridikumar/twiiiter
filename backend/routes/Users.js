var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const posts=require("../models/Posts");



router.post("/tweet", (req, res) => {
   console.log(req.body);
   const post=new posts({
       tweettext:req.body.tweettext,
       url:"",
       timestamp:Date.now(),
       username:req.body.username
   })
   post.save().then(result=>{
       console.log("succesfully updated");
       res.send("succesfulllllllll231231");

   })
   .catch(err=>{
       console.log(err);
   })
   
}); 


module.exports = router;


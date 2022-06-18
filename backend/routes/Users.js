var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const posts=require("../models/Posts");



router.post("/tweet", (req, res) => {
   console.log(req.body);
   let mentions=[];
   let hashtags=[];
   if(req.body.hasOwnProperty("mentions")){
       mentions=req.body.mentions;
   }
   if(req.body.hasOwnProperty("hashtags")){
    hashtags=req.body.hashtags;
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
       

   })
   .catch(err=>{
       console.log(err);
   })
   
}); 


module.exports = router;


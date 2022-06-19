const express = require('express')
const router = express.Router();
const hashtags= require("./../models/Hashtags")

const Posts = require('./../models/Posts');

router.get("/posts", (req, res) => {
    Posts.find({}, (err, posts) => {
        if(err){
            res.status(400).send({message: err, posts: null})
            return;
        }
        res.status(200).send({message: "posts successfully gathered", posts: posts})
    })
})

router.get("/trendinghashtags", (req, res) => {
    hashtags.find({}, (err, hashtags) => {
        if(err){
            res.status(400).send({message: err, hashtags: null})
            return;
        }
        //sort hashtags by counts
        hashtags.sort((a, b) => {
            return (b.counts - a.counts)
        })
        res.status(200).send({message: "Hashtags Successfully Gathered", hashtags: hashtags})
    })   
})


//get all posting containg a given hash
router.get("/hashtag/:hashtag", (req, res) =>{
    //console.log(req.params.hashtag)
    let tag = "#" + req.params.hashtag
    console.log(tag)
    Posts.find({hashtags: tag}, (err, posts) => {
        if(err){
            res.status(400).send({message: err, posts: null})
            return;
        }
        console.log("working from")
        console.log(posts)
        res.status(200).send({message: "posts successfully gathered", posts: posts})
    })
})

module.exports = router;
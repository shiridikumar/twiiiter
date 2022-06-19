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
        res.status(200).send({message: "Posts Successfully Gathered", posts: posts})
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

module.exports = router;
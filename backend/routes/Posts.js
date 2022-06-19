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

module.exports = router;
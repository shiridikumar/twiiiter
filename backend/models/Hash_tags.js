const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hashtags_schema = new Schema({
    hashtag:{
        type:String,
        required:true
    }, counts:{
        type:Number,
        required:true,
        default:0
    }, timestamps:{
        type: Array,
        required: True,
        default: []
    }
})

module.exports = Hashtags = mongoose.model("Hashtags", hashtags_schema);
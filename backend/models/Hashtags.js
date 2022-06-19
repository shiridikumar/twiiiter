const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hashtags_schema = new Schema({
    hash_tag:{
        type:String,
        required:true
    }, counts:{
        type:Number,
        required:true,
        default:0
    }, timestamps:{
        type: Array,
        required: true,
        default: []
    }
})

module.exports = Hashtags = mongoose.model("Hashtags", hashtags_schema);
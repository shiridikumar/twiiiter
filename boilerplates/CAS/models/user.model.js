const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user_schema = new Schema({
    name:{
        type: String,
        required: true,
    }, email:{
        type: String,
        required: true
    }, password:{
        type: String,
        required: true
    }, phone_number:{
        type: String
    }, interests:{
        type: Array
    }
})

module.exports = User = mongoose.model("User", user_schema);
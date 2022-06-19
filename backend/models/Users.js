const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const user_schema = new Schema({
	name:{
		type: String,
		required: true

	}, user_name:{
		type: String,
		required: true
	}, email:{
		type: String,
		required: true
	}, password:{
		type: String,
		required: true
	}, interests:{
		type: Array
	}, phone_number:{
		type: String,
		default: []
	}, joining_year:{
		type: Number
	}, predicted_grad_year:{
		type: Number
	}, course:{
		type: String,
	}, relationship_status:{
		type: String,
	}, bio:{
		type: String,
	}, followers:{
		type: Array,
	}, following:{
		type: Array
	} 
})

module.exports = User = mongoose.model("User", user_schema);
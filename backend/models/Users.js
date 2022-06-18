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
	}
})

module.exports = User = mongoose.model("User", user_schema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    name:{
        type:String
    },
	username: {
		type: String,
		required: true
	},
	timestamp:{
		type: Date,
		required: false
	},
    tweettext:{
        type:String,
        require:true
    },
    url:{
        type:String,
        required:false
    },
    mentions:{
        type:[String],
        required:false
    },
    hashtags:{
        type:[String],
        required:false
    }
});

module.exports = User = mongoose.model("Posts", PostSchema);

var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const posts = require("../models/Posts");
const hash = require("./../models/Hashtags");
var express = require("express");
var router = express.Router();
const multer = require("multer");
const {
  ref,
  uploadBytes,
  listAll,
  deleteObject,
  getDownloadURL 
} = require("firebase/storage");
const storage = require("./../firebase");
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });

// GET request 
// Just a test API to check if server is working properly or not
router.post("/addPicture", upload.single("pic"), async (req, res) => {
	const file = req.file;
	console.log("helllllo");
	const imageRef = ref(storage, file.originalname);
	const metatype = { contentType: file.mimetype, name: file.originalname };
	await uploadBytes(imageRef, file.buffer, metatype)
	  .then((snapshot) => {
		  console.log(snapshot);
		  getDownloadURL(snapshot.ref).then(url=>{
			  console.log(url);
              res.send(url);
		  })
		
	  })
	  .catch((error) => console.log(error.message));
});

const postsAPI = require('./Posts');
router.use("/posts", postsAPI);


router.post("/tweet", async (req, res) => {
    console.log(req.body);
    let mentions = [];
    let hashtags = [];

    if (req.body.hasOwnProperty("mentions") && req.body.mentions!=null) {
        mentions = req.body.mentions;
    }
    if (req.body.hasOwnProperty("hashtags") && req.body.hashtags!=null) {
        hashtags = req.body.hashtags;
        console.log("hashtags");
    }

    console.log(hashtags);
    const post = new posts({
        name: req.body.name,
        tweettext: req.body.tweettext,
        url: req.body.url,
        timestamp: Date.now(),
        username: req.body.username,
        mentions: mentions,
        hashtags: hashtags
    })
    await post.save().then(result => {
        console.log("succesfully updated");
        // res.send("succesful");

    })
        .catch(err => {
            console.log(err);

        })
    let vis = {};
    for (var i = 0; i < hashtags.length; i++) {
        let tag = hashtags[i];
        if (!(vis.hasOwnProperty(tag))) {
            vis[tag] = 1;

            await hash.findOne({ hash_tag: tag }, async (err, res1) => {
                if (res1) {
                    console.log(tag);
                    await hash.updateOne({ hash_tag: tag }, { $set: { counts: res1.counts + 1 } }, (err, res2) => {
                        console.log(res2);
                    })
                }
                else {
                    console.log("hellllllllo");
                    const newhash = new hash({
                        hash_tag: tag,
                        timestamps: Date.now(),
                        counts: 1
                    });
                    await newhash.save().then(res1 => {
                        console.log("succesdasdasdasdasda");

                    })
                        .catch(err => {
                            console.log(err);
                            res.send("unsuccesful");

                        });
                }

            })
        }

    }
    res.send("successful");

});

router.post("/register", (req, res) => {
    /* Checking if the user already exists. */
    User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            res.status(400).send({ message: "User Already Exists" })
            return;
        }
    })
    new_user = new User({
        name: req.body.name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        interests: req.body.interests,
        phone_number: req.body.phone_number,
        joining_year: req.body.joining_year,
        predicted_grad_year: req.body.predicted_grad_year,
        course: req.body.course,
        relationship_status: req.body.relationship_status,
        bio: req.body.bio
    })
    var temp = req.body.email.split("@")
    if (temp.length != 2) {
        res.status(400).send({ message: "Invalid Email Format" });
        return;
    }

    if (temp[1].slice(-10) != "iiit.ac.in") {
        res.status(400).send({ message: "The Website needs a IIITH email to log in" })
        return;
    }


    if (temp.length == 2 && temp[1].slice(-10))
        new_user.save()
            .then((user) => {
                res.status(200).send({ message: "User Successfully added" })
            })
            .catch((err) => {
                res.status(400).send({ message: err })
            })
})

router.post("/login", (req, res) => {
    console.log("asdasdasd");
    User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            if (user.password == req.body.password) {
                res.status(200).send({ user: user, messgae: "succesful login" });
                return;
            } else {
                res.status(400).send({ message: "Wrong Password" })
                return;
            }
        }
        if (err) {
            res.status(400).send({ message: err })
        }
    })
})

router.post("/follow", async (req, res) => {
   To_follow = req.body.to_follow;
   from_user = req.body.from_user;
   
   await User.findOne({user_name: from_user}, (err, user) =>{
        if(err){
            res.status(400).send({message: err});
        }

        if(user.following.includes(To_follow) == true){
            res.status(400).send({message: "Already following"});
        }
   })

   await User.updateOne({ user_name: from_user }, { $push: { following: To_follow } })

    await User.updateOne({ user_name: To_follow }, { $push: { followers: from_user } })

    res.status(200).send({message: "succesful"})
})



router.post("/unfollow", async (req, res) => {
    To_unfollow = req.body.to_unfollow;
    from_user = req.body.from_user;
    await User.findOne({ user_name: from_user }, (err, user) => {
        if (err) {
            res.status(400).send({ message: err });
        }

        if (user.following.includes(To_unfollow) == false) {
            console.log(user.following);
            res.status(400).send({ message: "Not following" });
        }
    })

    await User.updateOne({ user_name: from_user }, { $pull: { following: To_unfollow } })
    await User.updateOne({ user_name: To_unfollow }, { $pull: { followers: from_user } })

    res.status(200).send({ message: "succesful" })

})
    

router.post("/getfollowing", async (req, res) => {
    user_name = req.body.user_name;
    await User.findOne({ user_name: user_name }, (err, user) => {
        if (err) {
            res.status(400).send({ message: err });
        }
        res.status(200).send({ following: user.following })
    })
})

router.post("/getallusers",(req,res)=>{
    User.find({},(err,users)=>{
        if(err){
            res.send("error");
        }
        else{
            res.send(users);
        }
    })
})

module.exports = router;


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
		  })
		res.send("uploaded!");
	  })
	  .catch((error) => console.log(error.message));
  });
module.exports = router;

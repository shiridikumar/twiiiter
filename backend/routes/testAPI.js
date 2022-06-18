var express = require("express");
var router = express.Router();
const multer = require("multer");
const {
  ref,
  uploadBytes,
  listAll,
  deleteObject,
} = require("firebase/storage");
const storage = require("./../firebase");
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });

// GET request 
// Just a test API to check if server is working properly or not
router.post("/addPicture", upload.single("pic"), async (req, res) => {
	const file = req.file;
	const imageRef = ref(storage, file.originalname);
	const metatype = { contentType: file.mimetype, name: file.originalname };
	await uploadBytes(imageRef, file.buffer, metatype)
	  .then((snapshot) => {
		res.send("uploaded!");
	  })
	  .catch((error) => console.log(error.message));
  });
module.exports = router;

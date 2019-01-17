// Dependencies
const server = require("../../server");
const express = require("express");
const multer = require("multer");
const router = express.Router();

var User = require('../models/user');

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
  };
  
  //Define and initialaize the sorage handler
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error("Invalid mime type");
      if (isValid) {
        error = null;
      }
      cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
      const name = file.originalname
        .toLowerCase()
        .split(" ")
        .join("-");
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + "-" + Date.now() + "." + ext);
    }
  });
  
  

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    router.get("", (req, res, next) => {
        // Uses Mongoose schema to run the search (empty conditions)
        var query = User.find({});
        query.exec(function(err, users){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(users);
        });
    });

    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new users in the db

//Add new
router.post(
    "",
    multer({ storage: storage }).single("image"),
    (req, res, next) => {
          // Creates a new User based on the Mongoose schema and the post bo.dy
       // var newuser = new User(req.body);
       console.log("----email" + req.body.email + " pwd:" + req.body.password+ " add:" + req.body.address+ "long:" + (req.body.longitude+"") + (req.body.latitude+""));

        const newuser = new User({
            username: req.body.email,
            email: req.body.email,
            address: req.body.address,
            location: [req.body.longitude, req.body.latitude ]
          });

        // New User is saved in the db.
        newuser.save().then(createdUser => {
            res.status(201).json({
              message: "User added successfully",
              user: {
                ...createdUser,
                id: createdUser._id
              }
            });
          });
          
    });

module.exports = router;

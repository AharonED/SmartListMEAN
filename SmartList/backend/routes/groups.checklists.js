const server = require("../../server");
const express = require("express");
const multer = require("multer");

const Group = require("../models/group");

const router = express.Router();

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

//Get all
router.get("", (req, res, next) => {

  
    const groupQuery =  Group.aggregate(
      groups = [
        // Un-wind the array's to access filtering 
        //{ "$unwind": "$checklist" },
        {
          $group : {
            '_id': "$title",
              //'_id': {'title':"$title"},
              //'title' : {"$max" :"$title"},
              'count' : { "$sum": 1 }
          }
        },{ $sort: { count: 1 } }
      ]
  ).then(groups => {
    if (groups) {

      for (var gr1 in groups) {
        gr0= groups[gr1];     
        console.log(gr0);
        //var gr = Object.assign(new Group, gr0);  
        //console.log(gr.title);
      }

      res.status(200).json(groups);
    } else {
      res.status(404).json({ message: "Group not found!" });
    }
  });



});

module.exports = router;

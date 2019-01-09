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
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;

  var hll = require('hll');
  // initialize a new hyperloglog data structure
 var h = hll();
   
  // check out your standard error
// h.standardError
   
  // insert some values
  //> ['1', '2', '3', '4', '1', '2'].forEach(h.insert);
   
  // crunch the numbers

  /*
  const groupQuery = Group.find();
  groupQuery.then(documents => {
      fetchedGroups = documents;
      return Group.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Groups fetched successfully!",
        groups: fetchedGroups,
        maxGroups: count
      });
    });
*/

  const groupQuery = Group.find().then(groups => {
    if (groups) {
      //var gr = require("../models/group");
      //gr  = group;

      for (var gr1 in groups) {
        gr0= groups[gr1];     
        //console.log(gr0);
        var gr = Object.assign(new Group, gr0);  
        //console.log(gr.title);
        h.insert(gr.title);
      }

      //var myJSON = JSON.stringify(groups);
      //var gr = Object.assign(new Group, myJSON); //      JSON.parse(myJSON);
      //h.insert(myJSON);
      //['1', '2', '3', '4', '1', '2'].forEach(h.insert);
      //console.log(groups.title);
      }
    }).then(()=>{
      //console.log(h.estimate());
      res.status(200).json(h.estimate() );
  }) ;
});

module.exports = router;

const express = require("express");
const multer = require("multer");
const ObjectId = require('mongodb').ObjectId; 

const Checklist = require("../models/checklist");

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


//Add new
router.post(
  "",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    console.log("post");
    console.log("GroupID=" + req.body.group);
    const checklist = new Checklist({
      title: req.body.title,
      description: req.body.description,
      imagePath: url + "/images/" + req.file.filename,
      group: req.body.group
    });
    checklist.save().then(createdChecklist => {
      res.status(201).json({
        message: "Checklist added successfully",
        checklist: {
          ...createdChecklist,
          id: createdChecklist._id
        }
      });
    });
  }
);

//Update
router.put(
  "/:id",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    let imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      imagePath = url + "/images/" + req.file.filename;
    }
    const checklist = new Checklist({
      _id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      imagePath: imagePath,
      group: req.body.group
    });
    console.log(checklist);
    Checklist.updateOne({ _id: req.params.id }, checklist).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  }
);

//Get all
router.get("", (req, res, next) => {
  console.log("get method");
  
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const group = req.query.group;

  console.log("group:" + group);
  console.log("group:" + req.query.group);


  //  const checklistQuery = Checklist.find();
//  const checklistQuery = Checklist.find({"_id": ObjectId("5c331a3c0f7e35027a92d48d")});
//const checklistQuery = Checklist.find({"group.$oid": ObjectId("5c2f13011c600e038f77a8b2")});
const checklistQuery = Checklist.find().where('group').equals(ObjectId(group)) ;

  
  let fetchedChecklists;
  if (pageSize && currentPage) {
    checklistQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  checklistQuery
    .then(documents => {
      fetchedChecklists = documents;
      return Checklist.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Checklists fetched successfully!!!",
        checklists: fetchedChecklists,
        maxChecklists: count
      });
    });
});


//Get by ID, or All by GroupId
router.get("/:id", (req, res, next) => {
/*  
  console.log(req.params.length);

  if(req.params.id==null)
  {
    console.log("get method by group id");

    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const checklistQuery = Checklist.find();
    let fetchedChecklists;
    if (pageSize && currentPage) {
      checklistQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    checklistQuery
      .then(documents => {
        fetchedChecklists = documents;
        return Checklist.count();
      })
      .then(count => {
        res.status(200).json({
          message: "Checklists fetched successfully!---",
          checklists: fetchedChecklists,
          maxChecklists: count
        });
      });
   
  }
  else  {*/
    console.log("get method checklist by id");
    console.log(req.params.id);

    Checklist.findById(req.params.id).then(checklist => {
      if (checklist) {
        res.status(200).json(checklist);
      } else {
        res.status(404).json({ message: "Checklist not found!" });
      }
    });
  //}
});

//Delete by ID
router.delete("/:id", (req, res, next) => {
  Checklist.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Checklist deleted!" });
  });
});

module.exports = router;

const express = require("express");
const multer = require("multer");
const ObjectId = require('mongodb').ObjectId; 

const ChecklistItems = require("../models/checklistItem");

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
    console.log("ChecklistId=" + req.body.checklistId);
    const checklistItems = new ChecklistItems({
      title: req.body.title,
      description: req.body.description,
      imagePath: url + "/images/" + req.file.filename,
      checklistId: req.body.checklistId,
      isDone: req.body.isDone
    });
    checklistItems.save().then(createdChecklistItems => {
      res.status(201).json({
        message: "ChecklistItems added successfully",
        checklistItems: {
          ...createdChecklistItems,
          id: createdChecklistItems._id
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
    const checklistItems = new ChecklistItems({
      _id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      imagePath: imagePath,
      checklistId: req.body.checklistId,
      isDone: req.body.isDone
    });
    console.log(checklistItems);
    ChecklistItems.updateOne({ _id: req.params.id }, checklistItems).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  }
);

//Get all
router.get("", (req, res, next) => {
  console.log("get method");
  
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const checklistId = req.query.checklistId;
  const isDone = req.body.isDone;


  console.log("checklistId:" + checklistId);
  console.log("checklistId:" + req.query.checklistId);


  //  const checklistItemsQuery = ChecklistItems.find();
//  const checklistItemsQuery = ChecklistItems.find({"_id": ObjectId("5c331a3c0f7e35027a92d48d")});
//const checklistItemsQuery = ChecklistItems.find({"checklistId.$oid": ObjectId("5c2f13011c600e038f77a8b2")});
const checklistItemsQuery = ChecklistItems.find().where('checklistId').equals(ObjectId(checklistId)) ;

  
  let fetchedChecklistItems;
  if (pageSize && currentPage) {
    checklistItemsQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  checklistItemsQuery
    .then(documents => {
      fetchedChecklistItems = documents;
      return ChecklistItems.find().where('checklistId').equals(ObjectId(checklistId)).count();
    })
    .then(count => {
      res.status(200).json({
        message: "ChecklistItems fetched successfully!!!",
        checklistItems: fetchedChecklistItems,
        maxChecklistItems: count
      });
    });
});


//Get by ID, or All by ChecklistId
router.get("/:id", (req, res, next) => {
/*  
  console.log(req.params.length);

  if(req.params.id==null)
  {
    console.log("get method by checklistId id");

    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const checklistItemsQuery = ChecklistItems.find();
    let fetchedChecklistItems;
    if (pageSize && currentPage) {
      checklistItemsQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    checklistItemsQuery
      .then(documents => {
        fetchedChecklistItems = documents;
        return ChecklistItems.count();
      })
      .then(count => {
        res.status(200).json({
          message: "ChecklistItems fetched successfully!---",
          checklistItems: fetchedChecklistItems,
          maxChecklistItems: count
        });
      });
   
  }
  else  {*/
    console.log("get method checklistItems by id");
    console.log(req.params.id);

    ChecklistItems.findById(req.params.id).then(checklistItems => {
      if (checklistItems) {
        res.status(200).json(checklistItems);
      } else {
        res.status(404).json({ message: "ChecklistItems not found!" });
      }
    });
  //}
});

//Delete by ID
router.delete("/:id", (req, res, next) => {
  ChecklistItems.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "ChecklistItems deleted!" });
  });
});

module.exports = router;

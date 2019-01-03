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


//Add new
router.post(
  "",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const group = new Group({
      title: req.body.title,
      content: req.body.content,
      imagePath: url + "/images/" + req.file.filename
    });
    group.save().then(createdGroup => {
      res.status(201).json({
        message: "Group added successfully",
        group: {
          ...createdGroup,
          id: createdGroup._id
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
    const group = new Group({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      imagePath: imagePath
    });
    console.log(group);
    Group.updateOne({ _id: req.params.id }, group).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  }
);

//Get all
router.get("", (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const groupQuery = Group.find();
  let fetchedGroups;
  if (pageSize && currentPage) {
    groupQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  groupQuery
    .then(documents => {
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
});

//Get by ID
router.get("/:id", (req, res, next) => {
  Group.findById(req.params.id).then(group => {
    if (group) {
      res.status(200).json(group);
    } else {
      res.status(404).json({ message: "Group not found!" });
    }
  });
});

//Delete by ID
router.delete("/:id", (req, res, next) => {
  Group.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Group deleted!" });
  });
});

module.exports = router;

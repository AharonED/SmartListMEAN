const mongoose = require("mongoose");
  
//mongoose.use('autoCreate', true);

const groupSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true }
}, { autoCreate: true});

    console.log("creating collection...");
module.exports = mongoose.model("Group", groupSchema);

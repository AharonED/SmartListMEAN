const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true }
});

module.exports = mongoose.model("Group", groupSchema);

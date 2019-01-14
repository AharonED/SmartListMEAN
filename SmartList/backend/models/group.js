const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Checklist = require('./checklist');

const groupSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  imagePath: { type: String, required: false },
  checklist : [{ type: Schema.Types.ObjectId, ref: 'Checklist' }]
}, { autoCreate: true});

    console.log("creating collection...");
module.exports = mongoose.model("Group", groupSchema);
 
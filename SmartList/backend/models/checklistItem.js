const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Checklist = require('./checklist');

const checklistSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: false },
  checklistId : { type: Schema.Types.ObjectId, ref: 'Checklist' }
}, { autoCreate: true});

    console.log("Creating ChecklistItem collection...");
module.exports = mongoose.model("ChecklistItem", checklistSchema);

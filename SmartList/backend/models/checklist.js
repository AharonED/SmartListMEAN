
const mongoose = require('mongoose'), Schema = mongoose.Schema;
const ChecklistItems = require('./checklistItem');
const Group = require('./group');

const checklistSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  imagePath: { type: String, required: false },
  group : { type: Schema.Types.ObjectId, ref: 'Group' },
  checklistItems : [{ type: Schema.Types.ObjectId, ref: 'ChecklistItems' }]
}, { autoCreate: true});

    //console.log("creating Checklist scollection...");
module.exports = mongoose.model("Checklist", checklistSchema);

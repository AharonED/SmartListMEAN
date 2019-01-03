const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true }
});

if (!mongoose.connection.collections('Groups'))
{
    mongoose.createCollection('Collection', name='Groups');
    console.log("creating collection...");
}
module.exports = mongoose.model("Group", groupSchema);

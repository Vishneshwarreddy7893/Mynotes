const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  listItems: { type: [String], default: [] }, // 👈 Default always an array
}, { timestamps: true });

module.exports = mongoose.model("Note", noteSchema);

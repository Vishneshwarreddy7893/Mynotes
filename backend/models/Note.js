const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  listItems: [String],
});

module.exports = mongoose.model('Note', noteSchema);

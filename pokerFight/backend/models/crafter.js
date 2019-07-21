const mongoose = require('mongoose');

const crafterSchema = mongoose.Schema({
  name: { type: String, required: true },
  squad: { type: String, required: true }
});

module.exports = mongoose.model('Crafter', crafterSchema);
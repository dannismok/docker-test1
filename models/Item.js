// models/Item.js
const mongoose = require('mongoose');

// Define the schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = mongoose.model('Item', ItemSchema);
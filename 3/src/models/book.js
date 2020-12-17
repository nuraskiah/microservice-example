const mongoose = require('mongoose');

const book = mongoose.Schema({
  locationId: {
    type: String,
    required: true,
  },
  hotelId: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Book', book);

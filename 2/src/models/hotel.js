const mongoose = require('mongoose');

const hotel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  locationId: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  totalRooms: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Hotel', hotel);

var express = require('express');
var router = express.Router();

const {
  getHotels,
  getHotel,
  addHotel,
  updateHotel,
  deleteHotel,
} = require('../controllers/hotel');

router.get('/hotels', getHotels);
router.get('/hotel/:id', getHotel);
router.post('/hotel', addHotel);
router.patch('/hotel/:id', updateHotel);
router.delete('/hotel/:id', deleteHotel);

module.exports = router;

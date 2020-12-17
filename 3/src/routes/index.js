var express = require('express');
var router = express.Router();

const { bookHotel } = require('../controllers/book');

router.post('/book', bookHotel);

module.exports = router;

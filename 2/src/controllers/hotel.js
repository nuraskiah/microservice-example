const Hotel = require('../models/hotel');

exports.getHotels = async (req, res) => {
  try {
    const data = await Hotel.find();
    res.send({
      status: 'success',
      message: 'Hotels retrieved succesfully',
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'Internal Server Error',
      code: 500,
    });
  }
};

exports.getHotel = async (req, res) => {
  try {
    const data = await Hotel.findById(req.params.id);
    res.send({
      status: 'success',
      message: 'Hotel retrieved succesfully',
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'Internal Server Error',
      code: 500,
    });
  }
};

exports.addHotel = async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    const data = hotel.save();
    res.send({
      status: 'success',
      message: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'Internal Server Error',
      code: 500,
    });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      status: 'success',
      message: req.params.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'Internal Server Error',
      code: 500,
    });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.send({
      status: 'success',
      message: req.params.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'error',
      message: 'Internal Server Error',
      code: 500,
    });
  }
};

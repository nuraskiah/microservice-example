const amqp = require('amqplib');
const axios = require('axios');
const mailgun = require('mailgun-js');
const Book = require('../models/book');

const mg = mailgun({
  apiKey: process.env.MAILGUN_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

const consume = async () => {
  try {
    const connection = await amqp.connect(process.env.AMQP_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue('book', { durable: false });

    channel.consume('book', (message) => {
      const body = JSON.parse(message.content.toString());

      createBook(body);

      console.log(body);
      channel.ack(message);
    });

    console.log('Waiting for mesage...');
  } catch (error) {
    console.log(error);
  }
};

const createBook = async (data) => {
  try {
    const { qty, hotelId, userId } = data;

    const hotel = await axios.get(`http://localhost:5001/api/hotel/${hotelId}`);

    if (!hotel.data.data)
      return console.log({
        status: 'fail',
        message: 'Hotel not found',
        code: 404,
      });

    const { totalRooms } = hotel.data.data;

    if (totalRooms === 0)
      return console.log({
        status: 'fail',
        message: 'No rooms available',
        code: 400,
      });

    if (totalRooms < qty)
      return console.log({
        status: 'fail',
        message: 'Room isnt enough',
        code: 400,
      });

    const remainsRoom = totalRooms - qty;

    const body = JSON.stringify({ totalRooms: remainsRoom });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.patch(
      `http://localhost:5001/api/hotel/${hotelId}`,
      body,
      config
    );

    const user = await axios.get(`http://localhost:5000/api/user/${userId}`);
    const { email } = user.data.data;

    const emailConfig = {
      from: `Mejik <mejik@${process.env.MAILGUN_DOMAIN}>`,
      to: email,
      subject: 'Booking Success',
      text: 'Testing some Mailgun awesomness!',
    };

    mg.messages().send(emailConfig, function (error, body) {
      console.log(body);
    });

    // const book = new Book(data);
    // const newData = book.save();
  } catch (error) {
    console.log(error);
  }
};

module.exports = consume;

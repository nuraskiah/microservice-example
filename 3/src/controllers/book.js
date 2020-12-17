const amqp = require('amqplib');
const consume = require('./subscriber');

exports.bookHotel = async (req, res) => {
  try {
    const connection = await amqp.connect(process.env.AMQP_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue('book', { durable: false });

    channel.sendToQueue('book', Buffer.from(JSON.stringify(req.body)));
    console.log(JSON.stringify(req.body));

    channel.close();

    res.send({
      status: 'success',
      message: 'Book successfully created',
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

consume();

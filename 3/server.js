const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = 5002;

app.use(cors());
app.use(express.json());

// Database Connection
try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Database connected!');
} catch (error) {
  console.log(error);
}

const routes = require('./src/routes/index');
app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

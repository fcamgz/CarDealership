const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const carRoute = require('./routes/car');

const app = express();

// configurations
dotenv.config();
app.use(express.json());
app.use(cors());

// starting backend
app.listen(process.env.PORT || 5000, () => console.log('Backend is running'));

// connecting to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to db'))
    .catch(err => console.log(err));

// using the routes
app.use('/api/cars', carRoute);
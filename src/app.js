require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const reviewRouter = require('./services/review-router');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common'

app.set('trust proxy', 1);

const inDev = config.NODE_ENV === 'development';

app.use(cors({
  origin: inDev ? 'http://localhost:3000' : ['https://vinyl-wishlist.vercel.app', 'https://vinyl-wishlist.herokuapp.com'],
  credentials: true,
  preflightContinue: false
}))

app.use(morgan(morganOption));
app.use(helmet());


app.use(reviewRouter)

app.get('/', (req, res) => {
  res.send('Hello, world!');
})

app.use(function errorHandler(error, req, res, next) {
  let response
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } }
  } else {
    console.error(error)
    response = { message: error.message, error }
  }
  res.status(500).json(response)
})

module.exports = app;
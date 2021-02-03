const express = require('express');
const xss = require('xss');
const ReviewService = require('./review-service');
const reviewRouter = express.Router();
const jsonParser = express.json();

const sanitizedReview = review => ({
  id: review.id,
  title: xss(review.title),
  rating: review.rating,
  author: xss(review.author),
  body: xss(review.body)
});

reviewRouter
  .route('/api/')
  .get((req, res, next) => {
    ReviewService.getAllReviews(req.app.get('db'))
      .then(reviews => {
        res.json(reviews.map(sanitizedReview))
      })
      // .catch(next)
  });

reviewRouter
  .route('/api/addreview')
  .post(jsonParser, (req, res, next) => {
    const { id, title, rating, author, body } = req.body;
    const newReview = { id, title, rating, author, body };

    ReviewService.insertReview(req.app.get('db'), newReview)
      .then(review => {
        res.status(201)
          .json(sanitizedReview(review))
      })
  });

reviewRouter
  .route('/api/reviews/:id')
  .all((req, res, next) => {
    ReviewService.getById(req.app.get('db'), req.params.id)
      .then(review => {
        if (!review) {
          return res.status(404).json({
            error: { message: 'Review not found'}
          })
        }
        res.review = review
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.json(sanitizedReview(res.review))
  });

module.exports = reviewRouter;
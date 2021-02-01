const { expect } = require('chai');
const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const { makeReviewsArray } = require('../test/reviews.fixtures');

describe(`Reviews endpoints`, function() {
  let db;

  before(`make knex instance`, () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL
    })
    app.set('db', db)
  })

  after(`disconnect from db`, () => db.destroy());

  before(`clean the reviews table`, () => db('reviews').truncate());

  afterEach(`cleanup`, () => db('reviews').truncate());

  describe(`GET /api/`, () => {
    context(`There are reviews in the database`, () => {
      const testReviews = makeReviewsArray();

      beforeEach(`insert reviews`, () => {
        return db
          .into('reviews')
          .insert(testReviews)
      });

      it(`Returns the array of records`, () => {
        return supertest(app)
          .get('/api')
          .expect(testReviews)
      })
    })
  })

  describe(`POST /api/addreview`, () => {
    it(`adds a review, responds with 201 and the review`, () => {
      const newReview = {
        id: '667',
        title: "Ghostbusters",
        rating: 4,
        body: "Review goes here blah blah blah",
        "author": "DiGiornio"
      }
      return supertest(app)
        .post('/api/addreview')
        .send(newReview)
        .expect(res => {
          expect(res.body.id).to.eql(newReview.id)
        })
    })
  })

  describe(`GET review by id`, () => {

    const testReview = {
      id: '667',
      title: "Ghostbusters",
      rating: 4,
      body: "Review goes here blah blah blah",
      "author": "DiGiornio"
    }

    before(`add test review`, () => {
      return db
        .into('reviews')
        .insert(testReview)
    })

    it(`Returns a review by id`, () => {
      return supertest(app)
        .get(`/api/reviews/${testReview.id}`)
        .expect(testReview)
    })
  })
})
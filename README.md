# Movie Review Club

Movie Review Club is an app designed to help users form a "hub" of friends with which to share movie reviews.
Still a work in progress, authentication to be added soon!

This is the backend for `Movie Review Club`.  A live version of the app can be found live at https://movie-reviews-client.vercel.app/

The front end client can be found at https://github.com/grittygrady/movie-reviews-client.

## Preview

<img src="https://github.com/grittygrady/movie-reviews-client/blob/master/src/images/previews/reviewlist.png">

## Technology

#### Back End

* Node and Express
  * RESTful Api
* Testing
  * Supertest
  * Mocha and Chai
* Database
  * Postgres
  * Knex.js

#### Production

Deployed via Heroku

## Set up

Major dependencies for this repo include Postgres, Node, Knex and Express-Sessions.

To get setup locally, do the following:

1. Clone this repository to your machine, `cd` into the directory and run `npm install`
2. Create the dev and test databases: `createdb -U postgres -d vinyl_wishlist` and `createdb -U postgres -d vinyl_wishlist_test`

3. Create a `.env` file in the project root.

Inside this file you'll need the following:

````
NODE_ENV=development
PORT=8000
DATABASE_URL="postgresql://postgres@localhost/movie_review_club"
TEST_DATABASE_URL="postgresql://postgres@localhost/movie_review_club_test

````

4. Run the migrations for dev - `npm run migrate`
5. Run the migrations for test - `NODE_ENV=test npm run migrate`
6. Seed the database for dev

* `psql -U <db-user> -d movie_review_club -f ./seeds/seed.reviews.sql`

Now, run the command above again for the test database as well.

7. Run the tests - `npm t`
8. Start the app - `npm run dev`

## Endpoints

* [All Reviews](documentation/allreviews.md) : `GET /api/`

* [Add Review](documentation/addreview.md) : `GET /api/user/`

* [Review Details](documentation/reviewdetail.md) : `GET /api/reviews/:id`

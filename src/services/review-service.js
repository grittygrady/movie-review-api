const ReviewService = {
  getAllReviews(knex) {
    return knex
      .select('*')
      .from('reviews')
  },
  insertReview(knex, newReview) {
    return knex
      .insert(newReview)
      .into('reviews')
      .returning('*')
      .then(rows => rows[0])
  },
  getById(knex, id) {
    return knex
      .from('reviews')
      .where({ id })
      .first()
  }
};

module.exports = ReviewService;
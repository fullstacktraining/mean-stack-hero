var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

// Hotel routes
router
  .route('/hotels')
  .get(ctrlHotels.hotelsGetAll)
  .post(ctrlHotels.hotelsAddOne);

router
  .route('/hotels/:hotelId')
  .get(ctrlHotels.hotelsGetOne)
<<<<<<< HEAD
  .put(ctrlHotels.hotelsUpdateOne);
=======
  .put(ctrlHotels.hotelsUpdateOne)
  .delete(ctrlHotels.hotelsDeleteOne);
>>>>>>> bf895ecfd8bcfcbf644d3b9016f4731c3f0e1a1d


// Review routes
router
  .route('/hotels/:hotelId/reviews')
  .get(ctrlReviews.reviewsGetAll)
  .post(ctrlReviews.reviewsAddOne);

router
  .route('/hotels/:hotelId/reviews/:reviewId')
  .get(ctrlReviews.reviewsGetOne)
<<<<<<< HEAD
  .put(ctrlReviews.reviewsUpdateOne);
=======
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);
>>>>>>> bf895ecfd8bcfcbf644d3b9016f4731c3f0e1a1d

module.exports = router;
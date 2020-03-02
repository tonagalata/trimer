const express = require('express')
const router = express.Router();
const reviewsCtlr = require('../../controllers/reviews')

router.get('/:id/review', reviewsCtlr.index)
router.post('/:id/review', reviewsCtlr.create)
router.delete('/review/:id/', reviewsCtlr.deleteOneReview)


module.exports = router;
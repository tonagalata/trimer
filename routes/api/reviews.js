const express = require('express')
const router = express.Router();
const reviewsCtlr = require('../../controllers/reviews')


router.get('/:id/review', reviewsCtlr.index)

router.use(require('../../config/auth'))

router.post('/:id/review', isAuthenticated, reviewsCtlr.create)
router.delete('/review/:id/', isAuthenticated, reviewsCtlr.deleteOneReview)


/* Helper Function */

function isAuthenticated(req, res, next) {
  if(req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized'})
}


module.exports = router;
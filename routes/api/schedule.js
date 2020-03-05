const express = require('express')
const router = express.Router();
const scheduleCtlr = require('../../controllers/schedule')

router.get('/:id/schedule', scheduleCtlr.index)

router.use(require('../../config/auth'))

router.post('/:id/schedule', isAuthenticated, scheduleCtlr.create)
// router.delete('/schedule/:id/', scheduleCtlr.deleteOneReview)


/* Helper Function */

function isAuthenticated(req, res, next) {
  if(req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized'})
}

module.exports = router;
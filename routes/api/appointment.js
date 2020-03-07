const express = require('express')
const router = express.Router();
const appointmentCtlr = require('../../controllers/appointment')

router.get('/:id/schedule', appointmentCtlr.index)

router.use(require('../../config/auth'))

router.post('/:id/schedule', isAuthenticated, appointmentCtlr.create)
// router.delete('/schedule/:id/', scheduleCtlr.deleteOneReview)


/* Helper Function */

function isAuthenticated(req, res, next) {
  if(req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized'})
}

module.exports = router;
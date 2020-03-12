const express = require('express')
const router = express.Router();
const stylistCtlr = require('../../controllers/stylists')

router.post('/stylist/:id', stylistCtlr.create)
router.get('/stylist', stylistCtlr.index)
// router.get('/featured', salonCtlr.getFeatured)

// router.use(require('../../config/auth'))

// router.post('/create-salon', isAuthenticated,salonCtlr.create)

/* Helper Function */

function isAuthenticated(req, res, next) {
  if(req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized'})
}


module.exports = router;

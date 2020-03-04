const express = require('express')
const router = express.Router();
const salonCtlr = require('../../controllers/salon')

router.get('/salon', salonCtlr.index)
router.get('/featured', salonCtlr.getFeatured)
router.post('/create-salon', salonCtlr.create)

module.exports = router;

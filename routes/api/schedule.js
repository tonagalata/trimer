const express = require('express')
const router = express.Router();
const scheduleCtlr = require('../../controllers/schedule')

router.get('/:id/schedule', scheduleCtlr.index)
router.post('/:id/schedule', scheduleCtlr.create)
// router.delete('/schedule/:id/', scheduleCtlr.deleteOneReview)


module.exports = router;
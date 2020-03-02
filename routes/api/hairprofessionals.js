const express = require('express')
const router = express.Router();
const restaurantCtlr = require('../../controllers/hairprofessionals')

router.get('/hairprofessionals', restaurantCtlr.index)
router.post('/create-hairprofessional', restaurantCtlr.create)

module.exports = router;

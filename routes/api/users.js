const express = require('express')
const router = express.Router();
const userCtrl = require('../../controllers/users')


router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)



// const path = require('path')
// const multer = require('multer')
// const uuidv4 = require('uuid/v5')

// // Multer - File Upload

// const DIR = path.join(__dirname, 'public')

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//       const fileName = file.originalname.toLowerCase().split(' ').join('-');
//       cb(null, uuidv4() + '-' + fileName)
//   }
// });

// var upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//       if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//           cb(null, true);
//       } else {
//           cb(null, false);
//           return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//       }
//   }
// });

module.exports = router;

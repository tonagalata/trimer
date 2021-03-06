const Salon = require('../models/salon')

module.exports = {
  index,
  create,
  deleteOneReview,
  UpdateOneReview
}

async function index(req, res) {
  try {
    const salon = await Salon.findById(req.params.id)
    const reviews = await salon.reviews
    // reviews.splice(reviews, 1)
    // console.log(reviews)
    res.json(reviews);
  } catch (error) {
    res.status(400).json(error)
  }
}

async function create(req, res) {
  try {
    const salon = await Salon.findById(req.params.id);
    salon.reviews.push(req.body)
    salon.save({})
    res.json({});
  } catch (error) {
    res.status(400).json(error);
  }
}

async function deleteOneReview(req, res, next) {
  try {
    const salon = await Salon.findById(req.params.id);
    const reviews = await salon.reviews.splice(req.params.idx, 1)
    salon.save({})
    res.json(reviews)
  } catch (error) {
    console.log(error)
     res.status(400).json(error);
   }
}

async function UpdateOneReview(req, res) {
  try {
    const salon = await Salon.findById(req.params.id);
    const reviews = await salon.reviews.splice(req.params.idx, 1, req.body)

    salon.save({})
    res.json({reviews});
  } catch (error) {
    console.log(error)
     res.status(400).json(error);
   }
}
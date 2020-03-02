const HairProfessional = require('../models/hairprofessional')

module.exports = {
  index,
  create,
  deleteOneReview
}

async function index(req, res) {
  try {
    const hairprofessional = await HairProfessional.findById(req.params.id);
    const reviews = await hairprofessional.reviews
    reviews.splice(reviews, 1)

    console.log(reviews)
    res.json(reviews);
  } catch (error) {
    res.status(400).json(error)
  }
}

async function create(req, res) {
  try {
    const hairprofessional = await HairProfessional.findById(req.params.id);
    hairprofessional.reviews.push(req.body);
    hairprofessional.save({})
    res.json(hairprofessional);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function deleteOneReview(req, res) {
  try {
    const hairprofessional = await HairProfessional.findById(req.params.id);
    const reviews = await hairprofessional.reviews
    reviews.splice(reviews._id, 1)
    hairprofessional.save({})
    res.json(reviews);
  } catch (error) {
    console.log(error)
     res.status(400).json(error);
   }
}
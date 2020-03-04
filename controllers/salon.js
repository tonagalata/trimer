const Salon = require('../models/salon')


module.exports = {
  index,
  create,
  getFeatured
}

async function index(req, res) {
  const salon = await Salon.find({})
  .populate('addedBy')
  .sort({ title: 1 })
  res.json(salon);
  Salon.find({})
}

async function getFeatured(req, res) {
  try {
    const salon = await Salon.find({})
    .populate('addedBy')
    .sort({ '-createdAt': 1 })
    .limit(3)
    res.json(salon);
    Salon.find({})
  } catch (error) {
    res.status(400).json(error)
  }
}

async function create(req, res){
  try{
  const salon = await Salon.create(req.body)
  salon.save({})
  res.json({});
} catch (err) {
  res.status(400).json(err);
}
}
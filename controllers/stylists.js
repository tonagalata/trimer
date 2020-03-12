// const Salon = require('../models/salon')
const Stylist = require('../models/stylist')


module.exports = {
  index,
  create,
}

async function index(req, res) {
  const stylist = await Stylist.find({})
  .populate('homeSalon')
  .sort({ 'createdAt': -1 })
  res.json(stylist);
  // Stylist.find({})
}

async function create(req, res){
  try{
  const stylist = await Stylist.create(req.body)
  stylist.save({})
  res.json(stylist);
  
} catch (err) {
  res.status(400).json(err);
}
}
const HairProfessional = require('../models/hairprofessional')


module.exports = {
  index,
  create
}

async function index(req, res) {
  const hairprofessional = await HairProfessional.find({})
  .populate('addedBy')
  .sort({ title: 1 })
  res.json(hairprofessional);
  HairProfessional.find({})
}

async function create(req, res){
  try{
  const hairprofessional = await HairProfessional.create(req.body)
  hairprofessional.save({})
  res.json({});
} catch (err) {
  res.status(400).json(err);
}
}
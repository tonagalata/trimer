const Salon = require('../models/salon')

module.exports = {
  index,
  create,
  removeAppointment
}

async function index(req, res) {
  try {
    const salon = await Salon.findById(req.params.id);
    const schedule = await salon.schedule
    // schedule.splice(schedule, 1)
    res.json(schedule);
  } catch (error) {
    res.status(400).json(error)
  }
}

async function create(req, res) {
  try {
    const salon = await Salon.findById(req.params.id)
    .populate('scheduledBy')
    salon.schedule.push(req.body);
    salon.save({})
    res.json(salon);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function removeAppointment(req, res) {
  try {
    const salon = await Salon.findById(req.params.id);
    const schedule = await salon.schedule
    schedule.splice(schedule._id, 1)
    salon.save({})
    res.json(schedule);
  } catch (error) {
    console.log(error)
     res.status(400).json(error);
   }
}
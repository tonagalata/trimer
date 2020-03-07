const Stylist = require('../models/stylist')

module.exports = {
  index,
  create,
  removeAppointment
}

async function index(req, res) {
  try {
    const stylist = await Stylist.findById(req.params.id);
    const appointment = await stylist.appointment
    // schedule.splice(schedule, 1)
    res.json(appointment);
  } catch (error) {
    res.status(400).json(error)
  }
}

async function create(req, res) {
  try {
    const stylist = await Stylist.findById(req.params.id)
    .populate('scheduledBy')
    stylist.appointment.push(req.body);
    stylist.save({})
    res.json(stylist);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function removeAppointment(req, res) {
  try {
    const stylist = await Stylist.findById(req.params.id);
    const appointment = await salon.schedule
    appointment.splice(appointment._id, 1)
    stylist.save({})
    res.json(appointment);
  } catch (error) {
    console.log(error)
     res.status(400).json(error);
   }
}
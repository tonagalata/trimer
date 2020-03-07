const mongoose = require('mongoose')

const Schema = mongoose.Schema;

scheduleSchema = new Schema({
  scheduledDate: {
    type: Date,
  },
  scheduledBy: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }
}, {
  timestamps: true
})

stylistSchema = new Schema({
  name: String,
  homeSalon: {
    type: Schema.Types.ObjectId, 
    ref: 'Salon'
  },
  appointment: [scheduleSchema]
},{
  timestamps: true
})

module.exports = mongoose.model('Stylist', stylistSchema)
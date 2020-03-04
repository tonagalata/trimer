const mongoose = require('mongoose')

const Schema = mongoose.Schema;

reviewSchema = new Schema({
  rating: {
    type: Number
  },
  content: {
    type: String
  },
  addedBy: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }
}, {
  timestamps: true
})

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

salonSchema = new Schema({
  businessName: {
    type: String,
    required: true
  },
  businessType: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  addedBy: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  reviews: [reviewSchema],
  schedule: [scheduleSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Salon', salonSchema)
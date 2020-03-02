const mongoose = require('mongoose')

const Schema = mongoose.Schema;

reviewSchema = new Schema({
  rating: {
    type: Number
  },
  content: {
    type: String
  }
}, {
  timestamps: true
})

hairprofessionalSchema = new Schema({
  businessName: {
    type: String,
    required: true
  },
  businessType: {
    type: String,
    enum: ['Barbershop', 'Salon', 'Spa'],
    unique: true
  },
  address: {
    type: String,
    unique: true,
    required: true
  },
  addedBy: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('HairProfessional', hairprofessionalSchema)
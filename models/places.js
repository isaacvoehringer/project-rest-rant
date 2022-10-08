const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true },
  pic: {type: String, },
  cuisines: {type: String, required: true  },
  city: {type: String, default: 'Nowhere' },
  state: {type: String, default: 'USA'},
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)












// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/asian-food.jpg'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/coffee.jpg'
//   }]


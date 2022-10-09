const db = require('../models')

db.Place.create([
    {
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/asian-food.jpg',
    founded: 1989
}, {
    name: 'Coding Dog Cafe',
    city: 'Pheonix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee.jpg',
    founded: 2020
}])
.then(() => {
console.log('Success!')
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})


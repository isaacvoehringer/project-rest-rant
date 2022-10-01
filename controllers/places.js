const router = require('express').Router()

// get /places/new

router.get('/new', (req, res) =>{
res.render('places/new')
})
  
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/asian-food.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee.jpg'
  }]
    res.render('places/index', {places})
  })
  
  

module.exports = router
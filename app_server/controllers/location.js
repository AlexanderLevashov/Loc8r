/* Get home page */
module.exports.homelist = function(reg, res) {
  res.render('locations-list', {
    title: 'FindPlaces - find a place to work with Wi-Fi',
    pageHeader: {
      title: 'FindPlaces',
      strapline: 'Find places to work with Wi-Fi near you!'
    },
    sidebar: "Looking for Wi-Fi and seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium Wi-Fi'],
      coords: {lat: 51.455041, lng: -0.9690884},
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false
      }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '5:00pm',
        closed: false
      }, {
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Homo Sapiens',
        rating: 5,
        timestamp: '14 September 2022',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      }, {
        author: 'Homo Erectus',
        rating: 3,
        timestamp: '12 September 2022',
        reviewText: 'It was okey. Coffee wasn\'t great, but the Wi-Fi was fast.'
      }],
      distance: '100m'
    },{
      name: 'King Bourger',
      address: '131 High Street, Reading, RG6 1PS',
      rating: 5,
      facilities: ['Hot drinks', 'Food', 'Premium Wi-Fi'],
      distance: '200m'
    },{
      name: 'Maniloff',
      address: '135 High Street, Reading, RG6 1PS',
      rating: 4,
      facilities: ['Hot drinks', 'Premium Wi-Fi'],
      distance: '300m'
    }]
  });
};

/* Get page about information about geoposition */
module.exports.locationInfo = function(reg, res) {
  res.render('location-info', {title: 'Location info'});
}

/* Get page about add review */
module.exports.addReview = function(reg, res) {
  res.render('location-review-form', {title: 'Add review'});
}

//https://www.google.ru/maps/@51.455041,-0.9690884,17z
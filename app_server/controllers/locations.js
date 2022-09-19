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
/* Get home page */
module.exports.homelist = function(reg, res) {
    res.render('index', {title: 'Home'});
}

/* Get page about information about geoposition */
module.exports.locationInfo = function(reg, res) {
    res.render('index', {title: 'Location info'});
}

/* Get page about add review */
module.exports.addReview = function(reg, res) {
    res.render('index', {title: 'Add review'});
}
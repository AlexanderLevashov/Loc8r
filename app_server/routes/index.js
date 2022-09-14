var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/others');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
var homepageController = function(reg, res) {
  res.render('index', {title: 'Express'})
};

/* Страница местоположений */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Другие страницы */
router.get('/about', ctrlOthers.about)

/* Get home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = router;

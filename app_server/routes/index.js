var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
var homepageController = function(reg, res) {
  res.render('index', {title: 'Express'})
};

router.get('/', ctrlMain.index);

/* Get home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;

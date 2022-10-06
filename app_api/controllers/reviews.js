var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var reviewsCreate = function(req, res) {};
var reviewsReadOne = function(req, res) {};
var reviewsUpdateOne = function(req, res) {};
var reviewDeleteOne = function(req, res) {};

module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewDeleteOne
}

// module.exports.reviewsCreate = function(req, res) {};
// module.exports.reviewsReadOne = function(req, res) {};
// module.exports.reviewsUpdateOne = function(req, res) {};
// module.exports.reviewDeleteOne = function(req, res) {};
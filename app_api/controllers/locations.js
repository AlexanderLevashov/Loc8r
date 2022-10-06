var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var locationsCreate = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

var locationsListByDistance = function(req, res) {};
var locationsReadOne = function(req, res) {};
var locationsUpdateOne = function(req, res) {};
var locationsDeleteOne = function(req, res) {};

// var sendJsonResponse = function(res, status, content) {
//     res.status(status);
//     res.json(content);
// }

// module.exports.locationsCreate = function(req, res) {
//     res.status(200);
//     res.json({"status" : "success"});
// };
// module.exports.locationsListByDistance = function(req, res) {};
// module.exports.locationsReadOne = function(req, res) {};
// module.exports.locationsUpdateOne = function(req, res) {};
// module.exports.locationsDeleteOne = function(req, res) {};

// var sendJsonResponse = function(res, status, content) {
//     res.status(status);
//     res.json(content);
// }

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};

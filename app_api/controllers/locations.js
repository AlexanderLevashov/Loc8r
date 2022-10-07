var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

var locationsCreate = function(req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

var locationsListByDistance = function(req, res) {};
var locationsReadOne = function(req, res) {
    if (req.params && req.params.locationid) {
    Loc
        .findById(req.params.locationid)
        .exec(function(err, location) {
            if(!location) {
            sendJsonResponse(res, 404, {
                "message": "locationid not found"
            });  
            return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonResponse(res, 200, location);
        });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No location in request"
        });
    }
};
var locationsUpdateOne = function(req, res) {};
var locationsDeleteOne = function(req, res) {};


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

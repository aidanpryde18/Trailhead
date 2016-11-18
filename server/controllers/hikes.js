// Hike Database Functions. Used for adding and querying hike data in the DB

var Hike = require('mongoose').model('Hike');

//Returns All Hikes in DB
exports.getHikes = function (req, res) {
    Hike.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};

//Return A Specific Hike
exports.getHikeById = function (req, res) {
    Hike.findOne({_id:req.params.id}).exec(function (err, hike) {
        res.send(hike);
    })
};

//Returns all hikes that have not happened yet.
exports.getUpcomingHikes = function (req, res) {
    Hike.find({date: {$gte: new Date()}}).exec(function (err, collection) {
        res.send(collection);
    })
};

//Takes the Data sent from the client and then sends the hike info to the DB
exports.createHike = function (req, res, next) {
    var hikeData = req.body;

    Hike.create(hikeData, function (err) {
        if (err) {
            if (err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Username');
            }
            res.status(400);
            return res.send({reason: err.toString()});
        }
        res.status(200);
        res.send();
    })
};
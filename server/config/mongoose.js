//Initializes Mongoose, Connects to the DB and loads User Data by calling the model Functions

var mongoose = require('mongoose'),
    hikeModel = require('../models/Hike'),
    userModel = require('../models/User');

module.exports = function (config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('trailhead db opened');
    });

    userModel.createDefaultUsers();
    hikeModel.createDefaultCourses();

};


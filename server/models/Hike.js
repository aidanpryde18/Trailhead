//Mongoose Hike Schema

var mongoose = require('mongoose');

var hikeSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    creator: {type:String, required:'{PATH} is required!'},
    creatorHash: {type:String, required:'{PATH} is required!'},
    date: {type:Date, required:'{PATH} is required!'},
    location: {type:String, required:'{PATH} is required!'},
    description: {type:String}

});
var Hike = mongoose.model('Hike', hikeSchema);

//Creates a couple of Default Hikes so data is shown on initial load
exports.createDefaultCourses = function () {
    Hike.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            Hike.create({
                title: 'Larkspur Trail',
                creator: 'aidanpryde18',
                creatorHash: '1e517ca266cdf75cc297ba39c0468743',
                date: new Date('2016-11-27T12:00:00'),
                location: 'Boone National Forest',
                description: 'Short 3 mile hike with friends'
            });
            Hike.create({
                title: 'Broad Run Trail',
                creator: 'aidanpryde18',
                creatorHash: '1e517ca266cdf75cc297ba39c0468743',
                date: new Date('2016-12-03T15:00:00'),
                location: 'Hoosier National Forest',
                description: 'Overnight Trip'
            });
            Hike.create({
                title: 'Iron Ore Trail',
                creator: 'aidanpryde18',
                creatorHash: '1e517ca266cdf75cc297ba39c0468743',
                date: new Date('2017-01-13T12:00:00'),
                location: 'Bernheim Forest',
                description: 'Short 2 mile hike'
            });
            Hike.create({
                title: 'Grubb Ridge Trail',
                creator: 'aidanpryde18',
                creatorHash: '1e517ca266cdf75cc297ba39c0468743',
                date: new Date('2016-01-01T11:30:00'),
                location: 'Hoosier National Forest',
                description: 'Ring in the New Year with an 8 mile hike'
            });
        }
    })
};
//Sets the Environment Variable. Could be used to set different DBs depending on environment

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/trailhead',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://localhost/trailhead',
        port: process.env.PORT || 80
    }
}
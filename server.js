//Set Requirements
var express = require('express');
//Set Environment Type
var env = process.env.NODE_ENV || 'development';
//Initialize Express
var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

//Start Server
app.listen(config.port);

console.log('Listening on port ' + config.port + '...');
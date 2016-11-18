// Server-Side routing file. Handles all of the data entry and retrieval

var auth = require('./auth'),
    users = require('../controllers/users'),
    hikes = require('../controllers/hikes'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (app) {

    //User API CALLS
    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

    //Hike API CALLS
    app.get('/api/hikes/upcoming', hikes.getUpcomingHikes);
    app.get('/api/hikes', hikes.getHikes);
    app.post('/api/hikes', hikes.createHike);
    app.get('/api/hikes/:id', hikes.getHikeById);

    //General Server Calls
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });

    app.all('/api/*', function (req, res) {
        res.sendStatus(404);
    });

    //DEFAULT ROUTE
    app.get('*', function (req, res) {
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
};

// Part of the Hike Viewing Chain. Queries and displays hikes.

angular.module('app').factory('mvHike', function ($resource) {
    var hikeResource = $resource('/api/hikes/:_id', {_id: "@id"}, {
        update: {method: 'PUT', isArray:false}
    });

    return hikeResource;
});
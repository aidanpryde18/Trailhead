//Part of the Hike Creation Chain. Sends the hike to the Server for DB addition

angular.module('app').factory('mvHikeAuth', function ($http, $q, mvHike) {
    return {
        createHike: function (newHikeData) {
            var newHike = new mvHike(newHikeData);
            var dfd = $q.defer();

            newHike.$save().then(function () {
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        }
    }
});

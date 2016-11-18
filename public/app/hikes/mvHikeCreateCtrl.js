// Hike Creation Form Controller. Creates a JSON object and sends it for DB addition

angular.module('app').controller('mvHikeCreateCtrl', function ($scope, mvHike, mvHikeAuth, mvIdentity, mvNotifier, $location) {
    $scope.newhike = function () {
        var newHikeData = {
            title: $scope.title,
            date: $scope.date,
            location: $scope.location,
            description: $scope.description,
            creator: mvIdentity.currentUser.username,
            creatorHash: mvIdentity.currentUser.emailHash
        };

        mvHikeAuth.createHike(newHikeData).then(function () {
            mvNotifier.notify('New Hike Created!');
            $location.path('/');
        }, function (reason) {
            mvNotifier.error(reason);
        })
    }
});

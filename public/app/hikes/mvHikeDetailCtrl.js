// Hike Detail Controller. Retrieves data for a single hike when the link is clicked in a list

angular.module('app').controller('mvHikeDetailCtrl', function ($scope, mvHike, $routeParams) {
    $scope.hike = mvHike.get({_id:$routeParams.id})
});
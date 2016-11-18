//Used to Pull All Hikes regardless of date. Removed in final version but left for future updates

angular.module('app').controller('mvMainCtrl', function ($scope, mvHike) {
    $scope.hikes = mvHike.query();
});

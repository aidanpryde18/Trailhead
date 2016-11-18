// Hike List Controller. Has sorting and searching functionality.
// Removed in final version but left for future updates.

angular.module('app').controller('mvHikeListCtrl', function ($scope, mvHike) {
    $scope.hikes = mvHike.query();

    $scope.sortOptions = [
        {
            value: "title",
            text: "Sort by Title"
        },
        {
            value: "date",
            text: "Sort by Date"
        }];

    $scope.sortOrder = $scope.sortOptions[0].value;

});
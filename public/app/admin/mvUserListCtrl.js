// Pulls a list of all users from the DB.

angular.module('app').controller('mvUserListCtrl', function ($scope, mvUser) {
    $scope.users = mvUser.query();
})
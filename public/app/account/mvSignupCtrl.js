// User Creation Form Controller. Creates a JSON object and sends it for DB addition

angular.module('app').controller('mvSignupCtrl', function ($scope, mvUser, mvAuth, mvNotifier, $location) {
    $scope.signup = function () {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function () {
            mvNotifier.notify('User Account Created!');
            $location.path('/');
        }, function (reason) {
            mvNotifier.error(reason);
        })
    }
});

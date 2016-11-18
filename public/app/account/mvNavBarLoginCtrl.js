//Controller for Sign In and Sign Out. Redirects on successful attempts
//Pops up a notification either way with information

angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
    $scope.identity = mvIdentity;
    $scope.signin = function (username, password) {
        mvAuth.authenticateUser(username, password).then(function (success) {
            if(success) {
               mvNotifier.notify("You have successfully logged in!");
               $location.path('/');
            } else {
                mvNotifier.notify("Incorrect Username/Password combination!");
            }
        });
    }

    $scope.signout = function () {
        mvAuth.logoutUser().then(function () {
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify('You have successfully signed out!');
            $location.path('/');
        })
    }
});
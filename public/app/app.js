// Angular Initialization

angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function (mvAuth) {
                return mvAuth.authorizeCurrentUserForRoute('admin')
        }},
        user: {auth: function (mvAuth) {
            return mvAuth.authorizeAuthenticatedUserForRoute('admin')
        }}
    };

    //Angular Routing and Controller Binding
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', { templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/signin', { templateUrl: '/partials/account/signin',
            controller: 'mvNavBarLoginCtrl'
        })
        .when('/profile', { templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
        })
        .when('/hikes', { templateUrl: '/partials/hikes/hike-list',
            controller: 'mvHikeListCtrl'
        })
        .when('/newhike', { templateUrl: '/partials/hikes/newhike',
            controller: 'mvHikeCreateCtrl'
        })
        .when('/hikes/:id', { templateUrl: '/partials/hikes/hike-details',
        controller: 'mvHikeDetailCtrl'
        })

});

angular.module('app').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});
angular.module('appRoutes', ['ngRoute'])      //ng route to create route

    .config(function($routeProvider, $locationProvider) {  //location.path pour changer ou href
        $routeProvider

            .when('/Login', {  //= default location
                templateUrl: 'views/login.html',
                isLogin: true  //ne requiert pas de login pour y accéder
            })

            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'regCtrl',
                isLogin: true
            })

            .otherwise({
                templateUrl: 'views/unknown.html'
            });

        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    });

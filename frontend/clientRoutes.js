angular.module('appRoutes', ['ngRoute'])      //ng route to create route

    .config(function($routeProvider, $locationProvider) {  //location.path pour changer ou href
        $routeProvider

            .when('/', {  //= default location
                templateUrl: 'views/login.html',
                isLogin: true  //ne requiert pas de login pour y accéder
            })

            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'regCtrl',
                isLogin: true
            })

            .when('/home', {
              templateUrl: 'views/home.html'
            })

            .when('/myProfil', {
                templateUrl: 'views/myProfil.html' ,
                controller: 'myProfilCtrl'

            })

            .when('/changeProfil', {
              templateUrl: 'views/changeProfil.html' ,
              controller: 'changeProfilCtrl'

            })

            .when('/catalogue', {
              templateUrl: 'views/catalogue.html' ,
              controller: 'catalogueCtrl'

            })

            .when('/myRecipes', {
              templateUrl: 'views/myRecipes.html' ,
              controller: 'myRecipesCtrl'

            })

            .when('/createRecipes', {
              templateUrl: 'views/createRecipes.html' ,
              controller: 'createRecipesCtrl'

            })

            .when('/searchRecipe', {
              templateUrl: 'views/searchRecipe.html' ,
              controller: 'searchRecipeCtrl'

            })

            .otherwise({
                templateUrl: 'views/unknown.html'
            });

        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    });

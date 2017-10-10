angular.module('myRecipesController', ['authServices','userServices','recipeServices']) //utiliser module userServices entre [] de app.js
//ajouter nouveau module crée (userControllers) entre [] de app.js pour pouvoir l'utiliser dans d'autres modules
  .controller('myRecipesCtrl', function($location, User, Recipe, Auth, $route, $scope) {

    $scope.annulation = function(user) {
        $location.path('/myProfil');
    }

    $scope.createRecipes = function() {
        $location.path('/createRecipes');
    }

  });

angular.module('myFavoriteRecipeController', ['authServices','userServices','recipeServices','userRecipeServices']) //utiliser module userServices entre [] de app.js
//ajouter nouveau module crée (userControllers) entre [] de app.js pour pouvoir l'utiliser dans d'autres modules
  .controller('myFavoriteRecipeCtrl', function($location, User,UserRecipe, Recipe, Auth, $route, $scope) {

          $scope.return = function(user) {
              $location.path('/myProfil');
          }


  });

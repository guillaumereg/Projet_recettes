angular.module('searchRecipeController', ['authServices','userServices','recipeServices']) //utiliser module userServices entre [] de app.js
//ajouter nouveau module crée (userControllers) entre [] de app.js pour pouvoir l'utiliser dans d'autres modules
  .controller('searchRecipeCtrl', function($location, User, Recipe, Auth, $route, $scope) {


            $scope.showResults=false;
            $scope.results={};
            $scope.errorMessage = {};
            $scope.showErrorMessage=false;
            $scope.searchData = {author:'', recipeTitle:'', ingredient:''};
            $scope.findRecipes = function() {
                $scope.results={};
                if ($scope.author =="" && $scope.author ==undefined && $scope.recipeTitle =="" && $scope.recipeTitle ==undefined && $scope.ingredient =="" && $scope.ingredient ==undefined){
                  $scope.errorMessage = "Veuillez remplir au moins un champs de recherche";
                  $scope.showErrorMessage=true;
                }
                else{
                  if($scope.author !=="" && $scope.author !==undefined){
                      $scope.searchData.author = $scope.author.toLowerCase();
                  }
                  else {
                      delete $scope.searchData.author;
                  }
                  if($scope.recipeTitle !=="" && $scope.recipeTitle !==undefined){
                      $scope.searchData.recipeTitle = $scope.recipeTitle.toLowerCase();
                  }
                  else {
                      delete $scope.searchData.recipeTitle;
                  }
                  if($scope.ingredient !=="" && $scope.ingredient !==undefined){
                      $scope.searchData.ingredient = $scope.ingredient.toLowerCase();
                  }
                  else {
                      delete $scope.searchData.ingredient;
                  }
                  Recipe.searchRecipes($scope.searchData).then(function(data){
                      if (data.data.success) {  // rediriger vers la page de login en cas de succes
                          $scope.showResults=true;
                          $scope.results=data.data.recipes;
                      } else {
                          console.log(data.data.message);
                      }
                  });
               }
            };

  });

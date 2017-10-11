angular.module('createRecipesController', ['authServices','userServices','recipeServices']) //utiliser module userServices entre [] de app.js
//ajouter nouveau module crée (userControllers) entre [] de app.js pour pouvoir l'utiliser dans d'autres modules
  .controller('createRecipesCtrl', function($location, User, Recipe, Auth, $route, $scope) {

    $scope.annulation = function(user) {
        $location.path('/myRecipes');
    }

    $scope.errorMessage={};
    $scope.showErrorMessage=false;
    $scope.creRecipes = function() {

    };

    function Lien() {
    	i = document.Choix.Liste.selectedIndex;
    	if (i == 0) return;
    	choix = document.Choix.Liste.options[i].value;
    	parent.location.href = choix;
    }

    function Lien2() {
    	i = document.Choix.Liste.selectedIndex;
    	if (i == 0) return;
    }


  });

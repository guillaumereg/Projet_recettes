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

    function Choix(form) {
    i = form.Rubrique.selectedIndex;
    if (i == 0) {
      return;
      }
    switch (i) {
    case 1 : var txt = new Array ('Sauce froide','Sauce chaude','Féculent'); break;
    case 2 : var txt = new Array ('Apéritif froid','Apéritif chaud','lol'); break;
    case 3 : var txt = new Array ('Entrée froide','Entrée chaude','lol'); break;
    }
    form.Rubrique.selectedIndex = 0;
    for (i=0;i<3;i++) {
      form.Page.options[i+1].text=txt[i];
      }
    }

  });

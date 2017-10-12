angular.module('catalogueController', ['authServices','userServices','recipeServices','userRecipeServices']) //utiliser module userServices entre [] de app.js
//ajouter nouveau module crée (userControllers) entre [] de app.js pour pouvoir l'utiliser dans d'autres modules
  .controller('catalogueCtrl', function($location, User, UserRecipe, Recipe, Auth, $route, $scope) {   //add factory User !!!! pour utiliser ce factory du module  userservices

//tous les types et sous_types
      $scope.showType=true;

      $scope.showAccompagnement=false;
      $scope.showApperitif=false;
      $scope.showEntree=false;
      $scope.showPlatComplet=false;
      $scope.showDessert=false;

      $scope.showSauceFroide=false;
      $scope.showSauceChaude=false;
      $scope.showFeculent=false;
      $scope.showLegume=false;
      $scope.showApperitifFroid=false;
      $scope.showApperitifChaud=false;
      $scope.showEntreeFroide=false;
      $scope.showEntreeChaude=false;
      $scope.showViande=false;
      $scope.showPoisson=false;
      $scope.showVegetarien=false;
      $scope.showGateau=false;
      $scope.showTarte=false;
      $scope.showPatisserie=false;
      $scope.showGlace=false;

      $scope.showPlats=false;
      var typeActuel;

//les types de plats
      $scope.Accompagnement = function(){
        $scope.showType=false;
        $scope.showSauceFroide=false;
        $scope.showSauceChaude=false;
        $scope.showFeculent=false;
        $scope.showLegume=false;
        $scope.showAccompagnement=true;
        $scope.showPlats=false;
      }

      $scope.Apperitif = function(){
        $scope.showType=false;
        $scope.showApperitifFroid=false;
        $scope.showApperitifChaud=false;
        $scope.showApperitif=true;
        $scope.showPlats=false;
      }

      $scope.Entree = function(){
        $scope.showType=false;
        $scope.showEntreeFroide=false;
        $scope.showEntreeChaude=false;
        $scope.showEntree=true;
        $scope.showPlats=false;
      }

      $scope.PlatComplet = function(){
        $scope.showType=false;
        $scope.showViande=false;
        $scope.showPoisson=false;
        $scope.showVegetarien=false;
        $scope.showPlatComplet=true;
        $scope.showPlats=false;
      }

      $scope.Dessert = function(){
        $scope.showType=false;
        $scope.showGateau=false;
        $scope.showTarte=false;
        $scope.showPatisserie=false;
        $scope.showGlace=false;
        $scope.showDessert=true;
        $scope.showPlats=false;
      }

      $scope.retourType = function(){
        $scope.showType=true;
        $scope.showAccompagnement=false;
        $scope.showApperitif=false;
        $scope.showEntree=false;
        $scope.showPlatComplet=false;
        $scope.showDessert=false;
        $scope.showPlats=false;
      }
//les sous_types de plats

      //sous_types affiliés aux accompagnements
      $scope.SauceFroide= function(){
        $scope.showAccompagnement=false;
        $scope.showSauceFroide=true;
        $scope.showPlats=true;
        typeActuel="SauceFroide";
      }
      $scope.SauceChaude= function(){
        $scope.showAccompagnement=false;
        $scope.showSauceChaude=true;
        $scope.showPlats=true;
        typeActuel="SauceChaude";
      }
      $scope.Feculent= function(){
        $scope.showAccompagnement=false;
        $scope.showFeculent=true;
        $scope.showPlats=true;
        typeActuel="Feculent";
      }
      $scope.Legume= function(){
        $scope.showAccompagnement=false;
        $scope.showLegume=true;
        $scope.showPlats=true;
        typeActuel="Legume";
      }

      //sous_types affiliés aux appéritifs
      $scope.ApperitifFroid= function(){
        $scope.showApperitif=false;
        $scope.showApperitifFroid=true;
        $scope.showPlats=true;
        typeActuel="AperitifFroid";
      }
      $scope.ApperitifChaud= function(){
        $scope.showApperitif=false;
        $scope.showApperitifChaud=true;
        $scope.showPlats=true;
        typeActuel="AperitifChaud";
      }

      //sous_types affiliés aux entrées
      $scope.EntreeFroide= function(){
        $scope.showEntree=false;
        $scope.showEntreeFroide=true;
        $scope.showPlats=true;
        typeActuel="EntreeFroide";
      }
      $scope.EntreeChaude= function(){
        $scope.showEntree=false;
        $scope.showEntreeChaude=true;
        $scope.showPlats=true;
        typeActuel="EntreeChaude";
      }

      //sous_types affiliés aux plats complets
      $scope.Viande= function(){
        $scope.showPlatComplet=false;
        $scope.showViande=true;
        $scope.showPlats=true;
        typeActuel="Viande";
      }
      $scope.Poisson= function(){
        $scope.showPlatComplet=false;
        $scope.showPoisson=true;
        $scope.showPlats=true;
        typeActuel="Poisson";
      }
      $scope.Vegetarien= function(){
        $scope.showPlatComplet=false;
        $scope.showVegetarien=true;
        $scope.showPlats=true;
        typeActuel="Vegetarien";
      }

      //sous_types affiliés aux desserts
      $scope.Gateau= function(){
        $scope.showDessert=false;
        $scope.showGateau=true;
        $scope.showPlats=true;
        typeActuel="Gateau";
      }
      $scope.Tarte= function(){
        $scope.showDessert=false;
        $scope.showTarte=true;
        $scope.showPlats=true;
        typeActuel="Tarte";
      }
      $scope.Patisserie= function(){
        $scope.showDessert=false;
        $scope.showPatisserie=true;
        $scope.showPlats=true;
        typeActuel="Patisserie";
      }
      $scope.Glace= function(){
        $scope.showDessert=false;
        $scope.showGlace=true;
        $scope.showPlats=true;
        typeActuel="Glace";
      }

//Renvoi des listes de recettes
    $scope.Plats= function(){
      Recipe.getRecipeBySousType({sous_Type: typeActuel})
        .then(function(data){
          if (data.data.success) {
              i=0;
              $scope.recipes = data.data.recipes;
              while (data.data.recipes[i]!=null){

                  UserRecipe.findOne({username: data.data.username, recipeTitle: recipe.recipeTitle})
                  .select().exec(function(err,user){
                      if(err){
                          throw err;
                      }
                      if(!UserRecipe){
                          $scope.favorite.color = "white";
                      }
                      else{            //= mot de passe soumis
                          $scope.favorite.color= "red";
                      }
                  });
                  i++;
              }
          } else {
              console.log(data.data.message);
          }
      });
    }

    $scope.favoriteRecipe = function(recipe) {
      Auth.getUser().then(function(data){
        var username = data.data.username;
        UserRecipe.addFavori({username: data.data.username, recipeTitle: recipe.recipeTitle})
                      .then(function(data){
            if (!data.data.success) {  // rediriger vers la page de login en cas de succes
                console.log(data.data.message);
            }
        });
      });
    }


  });

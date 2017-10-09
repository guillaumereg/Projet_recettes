angular.module('catalogueController', ['authServices','userServices','recipeServices']) //utiliser module userServices entre [] de app.js
//ajouter nouveau module crée (userControllers) entre [] de app.js pour pouvoir l'utiliser dans d'autres modules
  .controller('catalogueCtrl', function($location, User, Recipe, Auth, $route, $scope) {   //add factory User !!!! pour utiliser ce factory du module  userservices

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

//les types de plats
      $scope.Accompagnement = function(){
        $scope.showType=false;
        $scope.showSauceFroide=false;
        $scope.showSauceChaude=false;
        $scope.showFeculent=false;
        $scope.showLegume=false;
        $scope.showAccompagnement=true;
      }

      $scope.Apperitif = function(){
        $scope.showType=false;
        $scope.showApperitifFroid=false;
        $scope.showApperitifChaud=false;
        $scope.showApperitif=true;
      }

      $scope.Entree = function(){
        $scope.showType=false;
        $scope.showEntreeFroide=false;
        $scope.showEntreeChaude=false;
        $scope.showEntree=true;
      }

      $scope.PlatComplet = function(){
        $scope.showType=false;
        $scope.showViande=false;
        $scope.showPoisson=false;
        $scope.showVegetarien=false;
        $scope.showPlatComplet=true;
      }

      $scope.Dessert = function(){
        $scope.showType=false;
        $scope.showGateau=false;
        $scope.showTarte=false;
        $scope.showPatisserie=false;
        $scope.showGlace=false;
        $scope.showDessert=true;
      }

      $scope.retourType = function(){
        $scope.showType=true;
        $scope.showAccompagnement=false;
        $scope.showApperitif=false;
        $scope.showEntree=false;
        $scope.showPlatComplet=false;
        $scope.showDessert=false;
      }
//les sous_types de plats

      //sous_types affiliés aux accompagnements
      $scope.SauceFroide= function(){
        $scope.showAccompagnement=false;
        $scope.showSauceFroide=true;
      }
      $scope.SauceChaude= function(){
        $scope.showAccompagnement=false;
        $scope.showSauceChaude=true;
      }
      $scope.Feculent= function(){
        $scope.showAccompagnement=false;
        $scope.showFeculent=true;
      }
      $scope.Legume= function(){
        $scope.showAccompagnement=false;
        $scope.showLegume=true;
      }

      //sous_types affiliés aux appéritifs
      $scope.ApperitifFroid= function(){
        $scope.showApperitif=false;
        $scope.showApperitifFroid=true;
      }
      $scope.ApperitifChaud= function(){
        $scope.showApperitif=false;
        $scope.showApperitifChaud=true;
      }

      //sous_types affiliés aux entrées
      $scope.EntreeFroide= function(){
        $scope.showEntree=false;
        $scope.showEntreeFroide=true;
      }
      $scope.EntreeChaude= function(){
        $scope.showEntree=false;
        $scope.showEntreeChaude=true;
      }

      //sous_types affiliés aux plats complets
      $scope.Viande= function(){
        $scope.showPlatComplet=false;
        $scope.showViande=true;
      }
      $scope.Poisson= function(){
        $scope.showPlatComplet=false;
        $scope.showPoisson=true;
      }
      $scope.Vegetarien= function(){
        $scope.showPlatComplet=false;
        $scope.showVegetarien=true;
      }

      //sous_types affiliés aux desserts
      $scope.Gateau= function(){
        $scope.showDessert=false;
        $scope.showGateau=true;
      }
      $scope.Tarte= function(){
        $scope.showDessert=false;
        $scope.showTarte=true;
      }
      $scope.Patisserie= function(){
        $scope.showDessert=false;
        $scope.showPatisserie=true;
      }
      $scope.Glace= function(){
        $scope.showDessert=false;
        $scope.showGlace=true;
      }




  });

angular.module('changeProfilController', ['authServices','userServices']) //utiliser module userServices entre [] de app.js
//ajouter nouveau module crée (userControllers) entre [] de app.js pour pouvoir l'utiliser dans d'autres modules
  .controller('changeProfilCtrl', function($location, User, Auth, $route, $scope) {   //add factory User !!!! pour utiliser ce factory du module  userservices
    $scope.changeError = false;
    $scope.changeMessage = {};

    Auth.getUser().then(function(data){
      console.log(data);
      $scope.username = data.data.username;
      $scope.age = data.data.age;
      $scope.phoneNumber = data.data.phoneNumber;
      $scope.e_mail = data.data.e_mail;
    });


    $scope.saveChange = function() {
      Auth.getUser().then(function(data){
        var username = data.data.username;
        User.changeMyProfil({age: $scope.age, phoneNumber: $scope.phoneNumber,
                      e_mail: $scope.e_mail, username:data.data.username})
                      .then(function(data){
            if (data.data.success) {  // rediriger vers la page home en cas de succes
                $location.path('/myProfil');
            } else {
                console.log(data.data.message);
                $scope.changeError = true;
                $scope.changeMessage = data.data.message;
            }
        });
      });
    };


    $scope.annulation = function(user) {
        $location.path('/myProfil');
    }


  });

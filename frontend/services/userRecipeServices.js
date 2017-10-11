angular.module('userRecipeServices', [])

	.factory('UserRecipe', function($http) {

		var userRecipeFactory = {};

		userRecipeFactory.addFavori = function(recipeData) {
				return $http.post('/api/addFavori', recipeData); // Return data from end point to controller
		};

		return userRecipeFactory;
	});

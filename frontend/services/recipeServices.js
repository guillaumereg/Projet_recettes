angular.module('recipeServices', [])

	.factory('Recipe', function($http) {

		var recipeFactory = {};

		recipeFactory.getRecipeBySousType = function(sous_Type) {
				return $http.post('/api/getRecipeBySousType', sous_Type);
		};

		recipeFactory.searchRecipes = function(searchData) {
				return $http.post('/api/searchRecipe', searchData); // Return data from end point to controller
		};

		return recipeFactory;
	});

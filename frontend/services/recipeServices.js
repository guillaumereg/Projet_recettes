angular.module('recipeServices', [])

	.factory('Recipe', function($http) {

		var recipeFactory = {};

		recipeFactory.getRecipeBySousType = function(sous_Type) {
				return $http.post('/api/getRecipeBySousType', sous_Type); 
		};

		return recipeFactory;
	});

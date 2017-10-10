angular.module('cuisineApp', ['appRoutes','registerController', 'mainController',
							  'userServices', 'authServices','recipeServices','evaluationServices',
							  'myProfilController','changeProfilController','catalogueController','myRecipesController','createRecipesController'])

.config(function($httpProvider){   //configure app to intercept all http requests with this factory we created which assigns token to header
	$httpProvider.interceptors.push('AuthEveryRequest');
});

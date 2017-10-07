angular.module('cuisineApp', ['appRoutes','registerCtrl', 'mainController',
							  'userServices', 'authServices','recipeServices','evaluationService',])

.config(function($httpProvider){   //configure app to intercept all http requests with this factory we created which assigns token to header
	$httpProvider.interceptors.push('AuthEveryRequest');
});

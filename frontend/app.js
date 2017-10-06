angular.module('cuisineApp', ['appRoutes','registerCtrl', 'mainController',
							  'utilisateurServices', 'authServices','recetteServices','evaluationService',])

.config(function($httpProvider){   //configure app to intercept all http requests with this factory we created which assigns token to header
	$httpProvider.interceptors.push('AuthEveryRequest');
});

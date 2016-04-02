(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial','ngMdIcons'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider, $httpProvider) {
		$stateProvider.state('Login',{
			url: '/',
			templateUrl: 'views/LoginReg.html'
		}).state('Home', {
	    url: '/home',
	    templateUrl: '/views/home0.html'
	  }).state('Summary',{
	    url: '/Summary',
	    templateUrl: 'views/summary.html'
	  }).state('One', {
	    url: '/One/:id',
	    templateUrl: '/views/one.html'
	  }).state('Two',{
	    url: '/two',
	    templateUrl: '/views/two.html'
	  }).state('Three',{
	    url: '/three',
	    templateUrl: '/views/three.html'
	  }).state('Four',{
	    url: '/four',
	    templateUrl: '/views/four.html'
	  }).state('Five',{
	    url: '/five',
	    templateUrl: '/views/five.html'
	  });
		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthInterceptor');

	}
})();

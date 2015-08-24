(function(){
	"use strict"

	angular.module("phonebook").config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider 
		.state('home', {
			url: '/',
			templateUrl: 'templates/list.html',
			controller: 'ListController'
		})
		.state('create', {
			url: '/create',
			templateUrl: 'templates/editing.html',
			controller: "CreatingController"
		})
		.state('edit', {
			url: '/edit/:key',
			templateUrl: 'templates/editing.html',
			controller: "EditingController"
		});

	});


})()
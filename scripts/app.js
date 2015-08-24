(function(){
	"use strict"

	angular.module("phonebook", ["ui.router"])
		.run(["$localStorage", function($localStorage){

			$localStorage.deserialize();

		}]);

})()
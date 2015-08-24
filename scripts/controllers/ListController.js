(function(){
	"use strict"

	angular.module("phonebook").controller('ListController', ['$scope', "$hashTable", function($scope, $hashTable){

		$scope.contacts = $hashTable.toArray();
		$scope.filter = {};


		$scope.objectStringify = function(object) {
			return angular.toJson(object || {});
		}
	}])

})()
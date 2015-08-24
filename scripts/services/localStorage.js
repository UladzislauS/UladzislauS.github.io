(function(){
	"use strict"

	angular.module("phonebook").factory("$localStorage",  ["$window", "$hashTable", function($window, $hashTable){

		var localStorage = {};

		localStorage.serialize = function() {

			$window.localStorage["data"] = angular.toJson( $hashTable.toArray() );

		};

		localStorage.deserialize = function() {

			var arr = angular.fromJson($window.localStorage["data"] || '[]');
			for(var i = 0; i < arr.length; i++) {
				$hashTable.insert(angular.toJson(arr[i]), arr[i]);
			}

		};

		return localStorage;

	}])

})()
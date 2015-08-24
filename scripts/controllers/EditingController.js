(function(){
	"use strict"

	angular.module("phonebook").controller("EditingController", ["$scope", "$stateParams", "$state", "$hashTable", "$localStorage", function($scope,  $stateParams, $state, $hashTable, $localStorage){

		$scope.key =  $stateParams.key;
		$scope.error = "";

		var person = $hashTable.search($scope.key) || {};
		$scope.newPerson = {
			name: person.name,
			phone: person.phone,
			email: person.email					
		};


		$scope.save = function(){

			if( !$hashTable.change($scope.key, {key: angular.toJson($scope.newPerson), value: $scope.newPerson}) ) {
				$scope.error = "Such contact already exists";
				return false;
			}
			$state.go("home");

		};
		
		$scope.delete = function(){

			$hashTable.delete($scope.key);
			$state.go("home");
			$localStorage.serialize();

		};


	}])

})()
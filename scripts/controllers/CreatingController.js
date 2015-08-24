(function(){
	"use strict"

	angular.module("phonebook").controller("CreatingController", ["$scope", "$state", "$hashTable", "$localStorage", function($scope, $state, $hashTable, $localStorage){

		$scope.newPerson = {
			name: "",
			phone: "",
			email:""
		};

		$scope.error = "";

		$scope.save = function(){
			var key = JSON.stringify($scope.newPerson);
			if(!$hashTable.insert(key, $scope.newPerson)) {
				$scope.error = "Such contact already exists";
				return false;
			}
			$state.go("home");
			$localStorage.serialize();
		};

	}])

})()
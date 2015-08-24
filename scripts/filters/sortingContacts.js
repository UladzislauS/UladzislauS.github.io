(function(){
	"use strict"

	angular.module("phonebook").filter("sortingContacts", function() {

		return function(data) {
			function compareContact(obj1, obj2){
				var keys = ["name", "phone", "email"];

				for(var i = 0; i< keys.length; i++) {

					var value1 = obj1[keys[i]] || "";
					var value2 = obj2[keys[i]] || "";

					if(value1.toLowerCase() > value2.toLowerCase() ) {
						return 1;
					}
					if(value1.toLowerCase() < value2.toLowerCase() ) {
						return -1;
					}
				}
			}
			return data.sort(compareContact);
		}
	})

})()
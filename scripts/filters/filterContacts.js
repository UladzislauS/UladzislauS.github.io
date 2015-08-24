(function(){
	"use strict"

	angular.module("phonebook").filter("filterContacts", function() {

		return function(data, search) {

			search = search || "";
			var response = [];

			for(var i = 0; i < data.length; i++) {
				var name = data[i].name || "";
				if(name.toLowerCase().indexOf(search.toLowerCase()) >= 0 ){
					response.push(data[i])
				}
			}

			return response;
		}
	})

})()
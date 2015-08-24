(function(){
	"use strict"

	angular.module("phonebook").factory("$hashTable", function(){

		function HashTable() {

			this.items = [];
			this.length = 64;

		};

		HashTable.prototype = {

			insert: function(key, value) {

				if( this.isThere(key) ){
					return false;
				};

				var index = this.hash(key);

				if(this.items[index] === undefined) {
					this.items[index] = {};
				};

				this.items[index][key] = value;
				return true;

			},


			delete: function(key) {

				var index = this.hash(key);
				if( this.isThere(key) ) {
					delete this.items[index][key];
					return true;
				};
				return false;

			},

			search: function(key) {

				var index = this.hash(key);
				if( this.isThere(key) ) {
					return this.items[index][key];
				};
				return undefined;

			},

			change: function(key, valueObject) {

				var index = this.hash(key);
				if(this.isThere(valueObject.key)) {
					return false;
				};
				if (!this.isThere(key) ) {
					return true;
				};
				if(key === valueObject.key) {
					this.items[index][key] = valueObject.value;
				} else {
					this.delete(key);
					this.insert(valueObject.key, valueObject.value);
				};
				return true;
			},

			hash: function(key) {

				var hashValue = 0;
				for(var i = 0; i < key.length; i++) {
					hashValue += key.charCodeAt(i);
				};
				hashValue = this.length * (hashValue * 0.618 % 1);
				return hashValue ^ 0;
			},

			isThere: function(key) {

				var index = this.hash(key);
				if(this.items[index]) {

					if(this.items[index][key]) {
						return true;
					};

				};
				return false;
			},

			toArray: function() {

				var array = [];
				for(var i = 0; i < this.length; i++) {

					for(var key in this.items[i]) {
						array.push(this.items[i][key]);
					};

				};
				return array;
			}
		};

		return new HashTable();

	});

})()
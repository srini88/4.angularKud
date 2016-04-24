

var myApp = angular.module("myModule", [])

.controller('myController', ['$scope', function($scope){
		

	var country = {
		name : "AMURICA",
		capital : "WICHITA, KS",
		flag : "img.png"
	};
	$scope.country  = country;

	

 }]);


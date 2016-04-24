

var myApp = angular.module("myModule", [])
.controller('myController', ['$scope', function($scope){
	$scope.message = "Hello Angular";

	$scope.greeting = "nigga";
	console.log($scope.greeting);

 }]);


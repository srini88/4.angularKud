

var myApp = angular.module("myModule", [])
.controller('myController', ['$scope', function($scope){
	
	var employee = {
		name :"srini", 
		gender :"LGBT"
	};
	$scope.employee = employee;
 }]);


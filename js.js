

var myApp = angular.module("myModule", [])

.controller('myController', ['$scope', function($scope){
		var employee = {

			firstName : "Srini",
			lastName : "vas",
			gender : "LGBT"
		};

		$scope.employee = employee ;  //atching to scope..creating another employee on scope...
	

 }]);


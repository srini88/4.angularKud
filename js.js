

var myApp = angular.module("myModule", [])


.controller('myController', ['$scope', function($scope){
	
 var employees = [
                { name: "Ben", gender: 1, salary: 55000, city: "London" },
                { name: "Sara", gender: 2, salary: 68000, city: "Chennai" },
                { name: "Mark", gender: 1, salary: 57000, city: "London" },
                { name: "Pam", gender: 2, salary: 53000, city: "Chennai" },
                { name: "Todd", gender: 3, salary: 60000, city: "London" },
            ];
$scope.employees = employees;
$scope.hideSalary = false; //by defailt setting to false, not checked
 }]);

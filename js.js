

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


 }]);

// In this video we will discuss how to create a custom filter in AngularJS. 



// Custom filter in AngularJS
// 1. Is a function that returns a function
// 2. Use the filter function to create a custom filter 
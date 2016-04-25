

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

$scope.employeesView = "employees.html";  ///by default table willbe shown

 }]);

// ng-include directive is used to embed an HTML page into another HTML page. This technique is extremely useful when you want to reuse a specific view in multiple pages in your application. 

// The value of ng-include directive can be the name of the HTML page that you want to reuse or a property on the $scope object that points to the reusable HTML page.
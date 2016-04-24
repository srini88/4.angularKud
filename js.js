

var myApp = angular.module("myModule", [])
.controller('myController', ['$scope', function($scope){
	
 var employees = [
                { name: "Ben", gender: "Male", salary: 55000, city: "London" },
                { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
                { name: "Mark", gender: "Male", salary: 57000, city: "London" },
                { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
                { name: "Todd", gender: "Male", salary: 60000, city: "London" },
            ];
$scope.employees = employees;

 }]);
// When the "exact match" checkbox is checked, an exact match search is performed. 
// exact match is a boolean property, if checked it is true, else false
// <input type="checkbox" ng-model="exactMatch" /> Exact Match
//         <br /><br />

//          <tr ng-repeat="employee in employees | filter: searchText : exactMatch">
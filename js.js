

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

// hey if u remember orderBy ,in previous video ,if we want to order by 'age' we used to give orderBy:age , now here  , searchText.city is dynamically created ,so say we have $scope.searchText.city = 'London' ,thus it means searchText is now a object,not just a variable containing text,it has key:city, so when we apply filter ,it tries to find string according to which it will filter,that it find in key 'city',thus logically filter is applied to city,
// I am just guessing ,I may be wrong.﻿
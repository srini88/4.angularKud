

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
//this item passed from the ng-repeat stuff per employee
$scope.search = function(item){

    ///console.log(item); item will be passed inherently....
    // <tr ng-repeat="employee in employees | filter:search">
 
    if ($scope.searchText === undefined){
        return true;  ///true in the search filter...everything will be displayed..
    }

    else {
                    if (item.city.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1 ||  //found
                        item.name.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1) {
                        return true;
                    }
                }
                /// if you enter number or some shit like that...it wont search ..only searching through name and city
    return false;
}


 }]);

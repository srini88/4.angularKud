


// Working with nested scopes using $scope object : The following code creates 3 controllers  - countryController, stateController, and cityController. All of these have set name property on the $scope object. 






var app = angular.module("myApp",[])
//removed all the scope shit and used this
.controller("countryController",function($scope){
$scope.name = "India";
})
.controller("stateController",function($scope){
$scope.name = "Maharashtra";
})
.controller("cityController",function($scope){
$scope.name = "Mumbai";
});
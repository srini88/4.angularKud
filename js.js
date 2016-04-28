
var app = angular.module("myApp",[])
//removed all the scope shit and used this
.controller("redController",function($scope, $rootScope){
$scope.redColor = "Im a red color";
$rootScope.rootScopeColor = "I'm a root scope color"
})
.controller("greenController",function($scope, $rootScope){
$scope.greenColor = "Im a green color";

});
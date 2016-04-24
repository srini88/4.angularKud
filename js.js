///creating a module....

///first parameter..specifies the name...2nd parameter specifies the dependeicies of the module  []

var myApp = angular.module("myModule", []);  ///here passing an empty array as a dependency..

// in angular controller is a JS function..the job of the controller is to build a model for the view to display...

// in real world,,controller may call from a web service that retrievs data from a DB...create a JS contructor function in Angular for a controller...

// you pass in parameter $scope...which is a object that is passed by angular automatically... you stick your data to your scope...  like attach message property... and make it available in the view..

myApp.controller('myController', ['$scope', function($scope){
	$scope.obj = {};
	//function
	$scope.obj.name = function(){
		return "nigga";
	}
//property
	$scope.obj.prop = "I'm a godammn property";
 }]);

////you got to pass in scope in the array..as well as in the godammn function - very important from 1.5
// myApp.controller('myController', ['$scope', function($scope){
// 	$scope.message = "Angular JS tutorial";
// }]);

var myApp = angular.module("myModule", [])
.controller('myController', ['$scope', 'uppToLower', function($scope, uppToLower){
	

	///got to create a fun that will be called from index page...
	////from here go to the sservice....
	$scope.processText = function(input){
		console.log(input);
		$scope.output = uppToLower.processString(input);
	}

}]);



// var str = "srini";

// str[3] = "B";  //cannot do this...change wont have...always create another string
// console.log(str);

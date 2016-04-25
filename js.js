

var myApp = angular.module("myModule", [])

//using http service... we just injecting $http service...
.controller('myController', ['$http','$scope', '$log', function($http,$scope, $log){ 

	//var output = "";
	$scope.transformString = function(input){
		if (!input)  //check for truthiness
			return input;  //still returning here...

		var output = "";

		for (var i = 0; i < input.length ;  i++){

			if (i >0 && input[i] == input[i].toUpperCase()){ ///skipping the first letter
				output +=" ";
			}
			
			output += input[i];
			
		}
		$scope.output = output;
	}
}]);








	// 	//console.log(input);
	// 	output +=input[0];
	// 	for (var i = 1 ;  i < input.length ; i++){

	// 		if (isUpperCase(input[i])){
	// 			var nextChar =  " " + input[i];
	// 			output += nextChar;
	// 		}
	// 		else
	// 		{
	// 			output +=input[i];
	// 		}
	// 	}
	// 	function isUpperCase(str){
	// 		return str === str.toUpperCase();
	// 	}
	// 	//return output;
	// }
	// $scope.output = output;












//console.log(output);  //Srini Vas  is  a   Go D  boy


// var str = "SrinVa";

// console.log(str.charAt(4)); 
// same as 
// console.log(str[4]);





// In this video we will discuss creating and using a custom service in AngularJS. Let us understand this with an example. 



// Whenever the case changes from lower to upper, a single space character should be inserted. This means the string "AngularVideoTutorial" should be converted to "Angular Video Tutorial". 
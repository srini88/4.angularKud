

var myApp = angular.module("myModule", [])

//using http service... we just injecting $http service...
.controller('myController', ['$scope','stringService' ,

	function($scope, stringService){ 

		$scope.transformString = function(input){

			console.log(input);
			///still attaching to scope ka output
			$scope.output = stringService.processString(input);
		}
}]);


///problem with this shit

/////all the logic is within the controller function...
// 1) controller code is complex.....and large.
// 2) if we want to reuse the logic in any other controller , we got to duplicate this shit.....this is perfect example for using a service...encapsulate all this logic into a service and inject that service into any controller that needs it...





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
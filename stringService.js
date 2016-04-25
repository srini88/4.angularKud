
///factory method to create a custom service and register that shit with angular.....

///this factory method is gonna return a JS object...
//service is just a JS object with some properties and functions..
//ususally services in angular are stateless...

//injuect this ervice into controller
myApp.factory('stringService',['', function(){


	//return JS object...
	return {
		processString : function(input){

			console.log(input);
			if (!input)  //check for truthiness
				return input;  //still returning here...
			var output = "";

			for (var i = 0; i < input.length ;  i++){

				if (i >0 && input[i] == input[i].toUpperCase()){ ///skipping the first letter
					output +=" ";
				}
				output += input[i];
			}
			return output;
		}	
	};
}]);


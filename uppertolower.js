

myApp.factory("uppToLower", function(){


	return {
		///returning this..processString...will be called from js file like
		//uppToLower.processString(input)
		processString: function(input){
			var out = "";

			for (var i=0 ; i < input.length ; i++){
				//lowercase, change to upper
				if (input[i] === input[i].toLowerCase()){
					out += input[i].toUpperCase();
				}
				else 
					//uppoer case , change to lower
				if (input[i] === input[i].toUpperCase()){
					out += input[i].toLowerCase();
				}
				else  //rest all as it is
					out += input[i];
			}
			return out;
		}

	}



});
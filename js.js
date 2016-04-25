

var myApp = angular.module("myModule", [])

//using http service... we just injecting $http service...
.controller('myController', ['$http','$scope', function($http, $scope){
	
	////2nd way to call http get....lets use a config object here..
	///instead of http.get you got to use http({config object})
	$http({
		method : 'GET',
		url    :'http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1'

		})



		.then(function(response){
			$scope.output = response.data;
		});


 }]);

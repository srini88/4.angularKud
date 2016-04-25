

var myApp = angular.module("myModule", [])

//using http service... we just injecting $http service...
.controller('myController', ['$http','$scope', function($http, $scope){
	
	//this request will be executed asynchronously...
	//$http.get('http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1'); //this is wrong way...since it is asyncornosily..got to assign it to something.
	//when the request complestes succesfully then function will be called..
	$http.get('http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1')
		.then(function(response){
			$scope.output = response.data;
		});


 }]);

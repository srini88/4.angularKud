
var myApp = angular.module("myModule", [])
.controller('myController', ['$scope', '$location' , '$anchorScroll', '$http',function($scope, $location, $anchorScroll, $http){

	///using the http service...gives us a promise...that's why .then

	$http.get('http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1')
		.then(function (response){
			//console.log(response.data);
			$scope.output = response.data;
		}, function (response){
			$scope.output = response.data;
			console.log("Error");
		} 
		);
		$scope.scrollTo = function(episodeNo){
			$location.hash(episodeNo);  //append hash
			$anchorScroll();
		}
	
	

}]);


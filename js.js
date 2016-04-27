
var myApp = angular.module("myModule", [])
.controller('myController', ['$scope', '$location' , '$anchorScroll', function($scope, $location, $anchorScroll){

	//have to give the id of the elemnt we have to scroll to...
	$scope.scrollTo = function(scrollLocation){
		//location service...has a method called hash

		$location.hash(scrollLocation);
		console.log($location.hash(scrollLocation));  //
		//in the obj I see $url:"#bottom"
		//LocationHashbangUrl {$$protocol: "http", $$host: "localhost", $$port: 80, $$path: "", $$search: Object…}


		//goign to read what we have in the URL ...anchorScroll - reads hashed fragment and automatically scroll to that element in the page..
		//$anchorScroll.yOffset = 500;  not working fine
		$anchorScroll();  //reads the hashed frag
		//console.log($anchorScroll());  //undefined

		//seeing two hasehes in the URL 
		//http://localhost/rejuvenate/4.angularKud/##top


	}
	

}]);


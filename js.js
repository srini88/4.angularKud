///ng-route itself is a godammn depenedycy..as we included another file..

//angular's config functio to specify configyration of our app
//inject $routeProvider to configyre routes
///routeProvider has got .when () function
var myApp = angular.module("myModule", ['ngRoute'])
//we are injecting routeProivder, also inject..locationProvider
.config(function($routeProvider){

	$routeProvider
	.when("/home", {  //if the user is on /home...use this view and ctlrs
		templateUrl : "Templates/home.html",
		controller   : "homeController"
	})
	.when("/courses", {
		templateUrl : "Templates/courses.html",
		controller : "coursesController"
	})
	.when("/students", {
		templateUrl : "Templates/students.html",
		controller : "studentsController"
	})
	.when("/students/:id", {   //very imp
		templateUrl :"Templates/studentDetails.html",
		controller :"studentDetailsController"

	})
	.when("/studentSearch/:mName", {
		templateUrl :"Templates/studentsSearch.html", 
		controller : "studentsSearchController"
	})


	.otherwise({   //no first paramenter
		redirectTo : "/home"   //automatically we go to /home..
		//xyz -- again goes to /home..
	})

	
}) //chain controller function
.controller ("homeController", ['$scope', function($scope){
	$scope.message = "Home Page";
}])
.controller ("coursesController", ['$scope', function($scope){
	//return an array of courses..
	$scope.courses = ["C#", "Angular", "JQuery", "ASP.NET"];
}])
.controller ("studentsController", ['$scope','$http', '$location',function($scope, $http, $location){


	$scope.searchMovie = function(){
		if ($scope.movieName){  //if user entered a movieName
			$location.url("/studentSearch/"+$scope.movieName);
			console.log("movieName:  " + $scope.movieName);
			console.log($location.url("/studentSearch/"+$scope.movieName));
		}
		else{
			console.log("no movie name");
			//$location.url(""); //dotn go anywhere, stay on the same page
		}

	}

	$http.get('http://www.omdbapi.com/?s=dinosaur')
	.then(function (response){
		$scope.students = response.data;
		console.log(response.data);
	})
}])

.controller ("studentsSearchController", ['$routeParams','$scope', '$http', function($routeParams, $scope, $http){

	if ($routeParams.mName){
		console.log($routeParams.mName);   //this is also printing 
	}

	$http({
		url : "http://www.omdbapi.com/?",
		params : {s:$routeParams.mName},
		method :"get"
	}).then(function(response){
		$scope.movieDet = response.data;
		console.log($scope.movieDet);
	})


}])


// http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=2
// http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1
// http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=3
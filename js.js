
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
.controller ("studentsController", ['$scope','$http', function($scope, $http){

	////return a property callled students....has the web service connection.. using omdb webservice to get episodes..
	$http.get('http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1')
	.then(function (response){
		$scope.students = response.data;
		//console.log(response.data);
	})
}])
.controller ("studentDetailsController", ['$routeParams','$scope', '$http', function($routeParams, $scope, $http){

	$http({
		url :"http://www.omdbapi.com/?i={{$routeParams.id}}",  //this kind of stuff wont work  evaluating to http://www.omdbapi.com/?i={{$routeParams.id}}...
		//params : {i:$routeParams.id},   //very very imp
		method :"get"
	})
	.then(function (response){
		$scope.student = response.data;  //this student is gonna contain that specific student details  (episode details)
		console.log(response.data);
	})

}])


// http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=2
// http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1
// http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=3
	




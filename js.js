
///ng-route itself is a godammn depenedycy..as we included another file..

//angular's config functio to specify configyration of our app
//inject $routeProvider to configyre routes
///routeProvider has got .when () function
var myApp = angular.module("myModule", ['ngRoute'])
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


	




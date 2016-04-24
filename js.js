

var myApp = angular.module("myModule", [])


.controller('myController', ['$scope', function($scope){
	
 var employees = [
                { name: "Ben", gender: 1, salary: 55000, city: "London" },
                { name: "Sara", gender: 2, salary: 68000, city: "Chennai" },
                { name: "Mark", gender: 1, salary: 57000, city: "London" },
                { name: "Pam", gender: 2, salary: 53000, city: "Chennai" },
                { name: "Todd", gender: 3, salary: 60000, city: "London" },
            ];
$scope.employees = employees;
 }]);


// ng-hide and ng-show directives are used to control the visibility of the HTML elements

// Notice ng-model directive on the checkbox is set to hideSalary. hideSalary variable is then used as the value for ng-hide directive on the th and td elements that displays Salary. When the page is first loaded, hideSalary variable will be undefined which evaluates to false, as a result Salary column will be visible. When the checkbox is checked, hideSalary variable will be attached to the $scope object and true value is stored in it. This value is then used by the ng-hide directive to hide the salary td and it's th element. When the checkbox is unchecked, false value is stored in the hideSalary variable, which is then used by the ng-hide directive to display the Salary column. 
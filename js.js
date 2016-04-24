

var myApp = angular.module("myModule", [])
.controller('myController', ['$scope', function($scope){
	
 var employees = [
                {
                    name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                    gender: "Male", salary: 55000.788
                },
                {
                    name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                    gender: "Female", salary: 68000
                },
                {
                    name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                    gender: "Male", salary: 57000
                },
                {
                    name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                    gender: "Female", salary: 53000
                },
                {
                    name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                    gender: "Male", salary: 60000
                }
            ];
            $scope.employees = employees;
            $scope.sortColumn = "+name";
            $scope.reverseSort = false;

            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ?
                    !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }

            $scope.getSortClass = function (column) {

                if ($scope.sortColumn == column) {
                    return $scope.reverseSort
                      ? 'arrow-down'
                      : 'arrow-up';
                }

                return '';
            }

 }]);

// Sets up the model 
// sortColumn and reverseSort properties are attached to the $scope object. These 2 properties are used to control the column by which the data should be sorted and the sort direction.
// sortColumn is set to name and reverseSort is set to false. This will ensure that when the form is initially loaded, the table data will be sorted by name column in ascending order.
// Depending on the column header the user has clicked, sortData() function sets the sortColumn and reverseSort property values. 
// Based on the sort column and the sort direction, getSortClass() function returns the CSS class name to return. The CSS class controls the sort icon that will be displayed next to the sort column.
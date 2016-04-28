


// Working with nested scopes using $scope object : The following code creates 3 controllers  - countryController, stateController, and cityController. All of these have set name property on the $scope object. 




//if you look at this...its confusing....where is this name coming from? bit confising...

// say if you want to display like this..

// India 
// India = Maharashtra 
// India - Maharashtra - Mumbai 


var app = angular.module("myApp",[])
//removed all the scope shit and used this
.controller("countryController",function(){
this.name = "India";
})
.controller("stateController",function(){
this.name = "Maharashtra";
})
.controller("cityController",function(){
this.name = "Mumbai";
});
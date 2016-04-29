angular js framework 
open source project 

building spa's and line of business apps 

many public facing websites built with angular...

many JS frameworks to built web apps 

- dependency injection---- 
-- two way data binding... model and view in sync all times..
-- testing in mind right from start....through UNit testing and end to end testing...

---model view controller  (clean mvc way)split your code in MVC componenets...angular will manage it welll.....

--controlling the behavior of DOM elemetns using directives...
--- directives, filters, modules and routes....
only one script file 

ng-app  --- ng prefix stands for angular....ng-app is starting point of angular JS ...angular will check it in the HTMML page...if it is found, angular bootstraps itself and starts to manage section of the page...

{{}} called binding expression


A module is a container for different parts of your app...like controllers, services directives and filters...

you can think of a module as a Main() method in other types of applications..


scoope iobject itself is not the model..the shit you attach to scope object is the modell....the ones like $scope.message or something  like that...


this way you are creating  a clear separation between model , view and controller.....

controller should be only used to set up scope object and adding shit to it...
learn how to add behavior to scope object...
we can even attach complex objects...

if you want more readable error messages, use the uncompressed angular script in development....you see more shit...



2way data binding ---- very imp -- use ng-model 
binding expression updates the view when the model changes...{{message}}

if you want reverse shit -- use ng-model - by means of a text box...

means no need to write any code whatsoever to move the form values into our model shit.... awesome advantage...


ng-repeat - same as foreach loop ....

using repeat in tr and td

<tr ng-repeat = "employee in employees">

ng-init="parentIndex=$index"

Filters in angular can do 3 different things
1. Format data
2. Sort data
3. Filter data 

Filters can be used with a binding expression or a directive

To apply a filter use pipe (|) character

Syntax : {{ expression | filterName:parameter }}


Angular filters for formatting data 
Filter	Description
lowercase	Formats all characters to lowercase
uppercase	Formats all characters to uppercase
number	Formats a number as text. Includes comma as thousands separator and the number of decimal places can be specified
currency	Formats a number as a currency. $ is default. Custom currency and decimal places can be specified
date	Formats date to a string based on the requested format

Angular Date formats 
Format	Result
yyyy	4 digit year. Exampe 1998
yy	2 digit year. Example 1998 => 98
MMMM	January - December
MMM	Jan - Dec
MM	01 - 12
M	1 - 12 (No leading ZEROS)
dd	01 - 31
d	1 - 31 (No leading ZEROS)



limitTo filter : Can be used to limit the number of rows or characters in a string.

Syntax : {{ expression | limitTo : limit : begin}}

dateOfBirth: new Date("November 23, 1980")

employee in employees | limitTo: rowCount

                    <td> {{ employee.name | uppercase }} </td>
                    <td> {{ employee.dateOfBirth | date:"dd/MM/yyyy" }} 
                    <td> {{ employee.gender }} </td>
                    <td> {{ employee.salary | number:1}} </td>   one decimal
                    <td> {{ employee.salary | currency : "£" : 2 }} two decimal 


<input type="number"  will use step as attribute --- that will give the up and down arrows   - this is html5 element  == step is to how much to increment on a clikc 
<input type="number" step="0.5" ng-model="rowCount" max="5" min="0" />



To sort the data in Angular
1. Use orderBy filter
    {{ orderBy_expression | orderBy : expression : reverse}}
    Example : ng-repeat="employee in employees | orderBy:'salary':false"
2. To sort in ascending order, set reverse to false
3. To sort in descending order, set reverse to true
4. You can also use + and - to sort in ascending and descending order respectively
     Example : ng-repeat="employee in employees | orderBy:'+salary'"


orderBy bit weird...got to use '' and use just name prop in object...instead of object.prop

<tr ng-repeat="employee in employees | orderBy : 'employee.name'">
                    <td> {{ employee.name | uppercase }} </td>  this is wrong

<tr ng-repeat="employee in employees | orderBy : 'name'">  this is correct
                    <td> {{ employee.name | uppercase }} </td> 



orderBy : '-name'  desc
orderBy : '+name'  asc


ng-repeat="employee in employees | orderBy:'salary':false"   - this is ascending with false, with true it is descending ...



In this video we will discuss how to implement bidirectional sort in Angular JS. 



Here is what we want to do
1. The data should be sorted when the table column header is clicked
2. The user should be able to sort in both the directions - ascending and descending. Clicking on the column for the first time should sort the data in ascending order. Clicking on the same column again should sort in descending order.
3. An icon should be displayed next to the column showing the sort column and direction 


Search box

As we type in the search textbox, all the columns in the table must be searched and only the matching rows should be displayed.  

linking input type with the filter.....remember you have to use the filter keyword
<tr ng-repeat="employee in employees | filter:searchText">

Search : <input type="text" placeholder="Search employees"
                        ng-model="searchText" />


custom filters 



 For me, there are four types of filters. Yes, four, but there of course can be other variants. Let’s rattle through them:

Filter 1: Static (single) use filter


The returned function gets invoked each time Angular calls the filter, which means two-way binding for our filters. The user makes a change, the filter runs again and updates as necessary. The name of our filter is how we can reference it inside Angular bindings.

// filter method, creating `makeUppercase` a globally
// available filter in our `app` module
app.filter('makeUppercase', function () {
  // function that's invoked each time Angular runs $digest()
  // pass in `item` which is the single Object we'll manipulate
  return function (item) {
    // return the current `item`, but call `toUpperCase()` on it
    return item.toUpperCase();
  };
});


//http service....

// $http.get('http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1')
// 		.then(function(response){
// 			$scope.output = response.data;
// 		});



http service...is uised to make HTTP request to remote server

http service is a function that has a single input parameter ie a configuration object...

http service returns a promise object...the fns are executed asynchrounoslly...data may not be avalianl;e immediately...


got to use the then () method....it is chained.......in the then methodd, two params --- successCB and failureCB...


another built in angular service......$logService.....

$log.info(response);

the config object...we sending to the http get is the JS object.......it is a JS object....it is automatically converted to a JSON object....

JS object vs JSOn

The only time you need to enclose a key in quotes when using Object Literal notation is where the key contains a special character (if, :, - etc). It is worth noting that a key in JSON must be enclosed in double quotes.


The reason behind JSON/ XML and YAML is to enable data to be transferred between programming languages in a format both participating languages can understand; you can't give PHP or C++ your JavaScript object directly; because each language represents an object differently under-the-hood. However, because we've stringified the object into JSON notation; i.e. a standardised way to represent data, we can transmit the JSON representation of the object to another langauge (C++, PHP), they can recreate the JavaScript object we had into their own object based on the JSON representation of the object.

It is important to note that JSON cannot represent functions or dates. If you attempt to stringify an object with a function member, the function will be omitted from the JSON representation. A date will be converted to a string;
JSON.stringify({
    foo: new Date(),
    blah: function () { 
        alert('hello');
    }
}); // returns the string "{"foo":"2011-11-28T10:21:33.939Z"}"


The key difference between JSON and Javascript object is "JSON string is a data interchange format" and Javascript object is a data type in Javascript 

Note that JSON is limited in that it cannot store functions - the only values it can contain are:

objects (literals)
arrays
numbers
booleans
strings
nulls

 var obj = {foo: 42}; // creates a JavaScript object
 var json = '{"foo": 452}'; // creates a string containing JSON

 JSON has a much more limited syntax including:

Key values must be quoted
Strings must be quoted with " and not '
You have a more limited range of values (e.g. no functions allowed)


what is a service in AngularJS

what is a service in web development...


A math object may provide  service to add number...

a service is an object that provides some sort of service that can be reused...

angular JS has a lot of built in service.... http and $log....

in short a service is just an object...that provides some sort of service that can be reused...

the primary responsibity of the controller is to build the model for the view...the controller should not do ---calculate age from DOB ----


we should follow single responsibility prinicipel...put that logic in a service......

if the logic within the controller is too large or too complex.....services can inturn be used by controllers directives and filters...

services encapsulate resulable logic...that does not belong anywhere else...directives , filters, views, models and controllers...


main thing for a service is reusablitiy...anytime you make ajax call, use http service by simply injhecting into the object....

application is easy to maintain... Dependency injection....services can be simply be injected into controllers or other services that need them....


Since services are injected into controllers or other services...it is easy to test them...you can pass mock implementation 



///anchaor scroll service used to go to a specified content on the page...
//$anchorscroll service is used to jump to a specified element on the page

$location service hash method appends hash fragments to the URL

function($scope, $location, $anchorScroll)

$location.hash() methods appends hash fragments to the URL...

$anchorscroll service is used to jump to a specified element on the page
$location service hash method appends hash fragments to the URL
$anchorscroll() method reads the hash fragment in the URL and jumps to that element on the page
yOffset property specifies the vertical scroll-offset

-------routiong ...23

In general, as the application becomes complex you will have more than one view in the application. Let's say you are building a single page application for a training institute and you have the following views
 - Home
 - Courses
 - Students 

We can take advantage of the Angular routing feature, to have a single layout page, and then inject and swap out different views depending on the URL the end user has requested. 


views will be injected into layout view depending on the URL requested...

index.html is the layout view
home.html, courses.html & students.html will be injected into the layout view(index.html) depending on the URL the end user has requested 

For example, if the user has requested http://localhost:51983/home, then home.html will be injected into the layout view (index.html). Similarly if the user has requested http://localhost:51983/courses, then courses.html will be injected into the layout view (index.html). 


        <td class="leftMenu">
            <a href="#/home">Home</a>

            # is to simply tell the browser so we dont want to navigate away from index.html...instead partial templates will be injected into a location in index.html

                    <td class="mainContent">
            <ng-view></ng-view>

            ng-veiw is where the partial template is going to be injected...

 ///ng-route itself is a godammn depenedycy..as we included another file..
var myApp = angular.module("myModule", ['ngRoute'])

myApp
.config(function($routeProvider){

	$routeProvider
	.when("/home", {  //if the user is on /home...use this view and ctlrs
		templateUrl : "Templates/home.html",
		controller   : "homeController"
	})


	to remove #, enable html5mode routing...

	Step 1 : Enable html5mode routing. To do this inject $locationProvider into config() function in script.js and call html5Mode() method passing true as the argument value. With this change the config function will now look as shown below. 



	$location which we used before is different, and $locationProvider is different..

	$location in HTML5 mode requires a <base> tag to be present!

	$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
 without stpe 4 I;m gettin gcompilation error

 angular.js:13550 Error: [$location:nobase] $location in HTML5 mode requires a <base> tag to be present!
http://errors.angularjs.org/1.5.5/$location/nobase

	Step 4 : Set the base href to the location of your single page application. In the head section of index.html include the following line.
<base href="/" />


----configure a default route in angular...

if we are at the root of the site...none of the partial templates are injected at our site..
	http://localhost/rejuvenate/4.angularKud/  oalso to some other page..which is not configured in our route..
it will be blank  so you got to use otherWise in routeProvider..

so we want home.html (the default route) to be configured...

///by heart
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
	.otherwise({   //no first paramenter
		redirectTo : "/home"   //automatically we go to /home..
		//xyz -- again goes to /home..
	})


----route params./...

make shit in courses page...clickable and provide more info..

$http({
		url :"http://www.omdbapi.com/?",
		params : {i:$routeParams.id},   //very very imp
		method :"get"
	})


	----page refreshh issue....

	you got to base href to the top of the scripts...not seeing now because we dont have base href...

	----controller as

	<div ng-controller="myController as mainCtlr">
	{{mainCtlr.msg}}  
--- you will get a problem with controller as syntax..when using http with then.......
in thhen , you will use $scope.... you cannot take out scope and add this..

...within then , we are using this...this keyword points to the window object...and not to the instance of the controller...

If you use this keyword in then() function as shown below, you would not get the result you expect. That's because 'this' keyword points to the window object when the control comes to then() function. 

var vm = this;

this.students  -----

other way instead of controllerAs in one line..

controller : "homeController",
controllerAs :"homeCtlr"

controller as makes our code more readable when working with nested scopes..


	{{name}}  
	<div ng-controller="stateController">
	{{name}} - {{$parent.name}}
		<div ng-controller="cityController">

	{{name}} - {{$parent.name}} - {{$parent.$parent.name}}

	---- controllerAs syntax - is new..

	CONTROLLER AS syntax is new and is officially released in 1.2.0. $scope is the old technique and is available since the initial version of angular is released.

2. You can use either one of thes techniques. Both have their own uses. For example, CONTROLLER AS syntax makes your code more readable when working with nested scopes. We discussed this in our previous video.

3. If you want to use $scope it has to be injected into controller function, where as with CONTROLLER AS syntax there is no need for such injection, unless you need it for something else.

even if you use controllerAs, angular is still using $scope behind the scenes...


-------caseInsensitiveMatch and inline templates...


route

 The routes that are configured using config function are case sensitive by default.


 To make the route case-insensitive set caseInsensitiveMatch property to true as shown below.

//to make a route caseInsensitve....this is just for one route..
$routeProvider
    .when("/home", {
        templateUrl: "Templates/home.html",
        controller: "homeController",
        controllerAs: "homeCtrl",
        caseInsensitiveMatch: true
    })

    To make all routes case-insensitive set caseInsensitiveMatch property on $routeProvider as shown below.

$routeProvider.caseInsensitiveMatch = true; 

Inline Templates : The view content for the route (/home), is coming from a separate html file (home.html)

$routeProvider
    .when("/home", {
        templateUrl: "Templates/home.html",
        controller: "homeController",
        controllerAs: "homeCtrl",
    })

Should the view content always come from a separate html file. Not necessarily. You can also use an inline template. To use an inline template use template property as shown below.

$routeProvider   ///remember got to use template Property, instead of template URL.........
    .when("/home", {
        template: "<h1>Inline Template in action</h1>",
        controller: "homeController",
        controllerAs: "homeCtrl"
    })


    ----------route reload service....

     angular route service reload() method. This method is useful when you want to reload just the current route instead of the entire app. Let us understand this with an example.

     added a new entry in the DB table..for the new record to show up....one way is to reload the page....

     downside...makes it reload the entire application....

     . Notice that when you click on the same students link, nothing happens. This means if we insert a new record in the database table and issue a request to the same route, you may not see the new records. 

One of the ways to see the new data is by clicking on the browser refresh button. The downside of this is that the entire app is reloaded. This means all the resources required to run your app will be reloaded. You can see all the resource requests made on the network tab in the browser developer tools. 


you see 8 requests issued...and 2.5 kbytes transferred...
all the resources required to run this app are once again reloaded from the server...

just the godammn controller on the page..you got to add a reload button...or something...this is done using $route.reload()

Step 1 : Modify the studentsController function in script.js

//I'm just modifying the controller that is responsible for this shit..

.controller("studentsController", function ($http, $route) {
    var vm = this;

    vm.reloadData = function () {
        $route.reload();
    }


 and in the view , you got to add the reload button...

 Please note : 
1. $route service in injected in the controller function
2. reloadData() function is attached to the view model (vm) which will be available for the view to call. This method simply calls reload() method of the route service. 

Step 2 : Modify the partial template (students.html). Please note that we have included a button which calls reloadData() method when clicked. 

<h1>List of Students</h1>
<ul>
    <li ng-repeat="student in studentsCtrl.students">
        <a href="students/{{student.id}}">
            {{student.name}}
        </a>
    </li>
</ul>
<button ng-click="studentsCtrl.reloadData()">Reload</button>

There are 2 things to notice here
1. The newly added record will be shown on the view
2. Only the resources required to reload the current route are requested from the server 


------$rootscope and $scope
The main difference is that, $rootScope is available globally (for all controllers), whereas $scope is only available to the controller that has created it and it's children. 


Controller Code : We have 2 controllers (redColourController & greenColourController). redColourController has set redColour property on $scope and rootScopeColour on $rootScope. This means redColour property cannot be used outside the redColourController, where as rootScopeColour that is set on $rootScope can be used anywhere. greenColourController has set greenColour property on $scope. This means greenColour property cannot be used outside the greenColourController

you got to inject rootScope remmeber...
.controller("redController",function($scope, $rootScope)


: From the output it is clear that the rootScopeColour property that is set on $rootScope is available for both the controllers (redColourController & greenColourController). Where as redColour property set on $scope is available only for redColourController and not for greenColourController. Similarly, greenColour property set $scope is available only for greenColourController and not redColourController. Hope this example has made the difference between $rootScope and $scope clear. 


----------------how to cancel a route change in Angular...

priompt the user: (Are you sure you want to navigate away from this page)

you filled 90 % of form, and accidently clicked...some link..without confirmation..you will lose your unsaved data...

you click the cancel button and retain the unsaved data...


	$scope.$on("$routeChangeStart", function(event, next, current){
		if (!confirm("are you sure you wanna fuck off")){   //ok will return true, cancel returns false..
			event.preventDefault();
		}
	});


	Notice 
1. We are injecting $scope object into the controller function
2. With in $routeChangeStart event handler function, we are using confirm() function to display the confirmation dialog box
3. When the confirmation dialog box is displayed, If the user clicks Cancel, event.preventDefault() is called and it cancels the route change, so the user stays on the same page
4. On the other hand if the user clicks OK, event.preventDefault() is not called and the route is allowed to change.


If you want to include the route that the user is trying to navigate to in the confirmation message you can do so by using next parameter of the $routeChangeStart event handler function as shown below.

 next.$$route.originalPath

You can also cancel route change by handling $locationChangeStart event


--------------When route navigation occurs in an Angular application, the following events are triggered
1. $locationChangeStart
2. $routeChangeStart
3. $locationChangeSuccess
4. $routeChangeSuccess 

Please note that we are injecting $log service into the controller function to log the events. 

In our previous video, we used $$route.originalPath property to get the route that the user is navigating to. How do we know next parameter has $$route.originalPath property. Well the easiest way is to log and inspect their properties. The following code does exactly the same thing. 



---------------------------------------
In this video we will discuss angular optional URL parameters. Let us understand this with an example.

we want an interface to search for a movie...
if we dont enter anything...give some default movies...making movie name optional...

add webmethod to retrieve movies by name
http://www.omdbapi.com/?s=Batman


For example if we type "Ma" and click search button, on the subsequent page we want to display all the student names that start with "Ma" as shown below. 


we are making the search button to create html link using location.url

 Include a new route for searching students in script.js. To make a parameter optional, all you have to do is include a "?" at the end.

.when("/studentsSearch/:name?", {
    templateUrl: "Templates/studentsSearch.html",
    controller: "studentsSearchController",
    controllerAs: "studentsSearchCtrl"

})
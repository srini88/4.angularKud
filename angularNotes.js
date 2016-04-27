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
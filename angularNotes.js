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

















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
	

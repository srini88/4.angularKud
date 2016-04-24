myApp.filter("gend", function(){
    return function(gender){  //this gender is from employee.gender  which is filter input
        //console.log(gender);
        if (gender ==1) return "male";
        if (gender ==2) return "female";
        if (gender ==3) return "kojja";
    }

});

myApp.filter("toUpper" , function(){
	return function(item, opt){
		console.log(item);
		console.log(opt); //getting undefined
		return item.toUpperCase();
	}
});




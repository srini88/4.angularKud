myApp.filter("gend", function(){
    return function(gender){  //this gender is from employee.gender  which is filter input
        console.log(gender);
        if (gender ==1) return "male";
        if (gender ==2) return "female";
        if (gender ==3) return "kojja";
    }

})
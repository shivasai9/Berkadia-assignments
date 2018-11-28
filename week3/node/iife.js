/*
   what is iife???
     it stands for immediately invoked function expression.
     global variables are bad.
     for example if we want to load a page then that page is linked to 10 different java script files in
     which the code may be written by different persons.
     all those scripts are executed in a common space in a page.
     if there is a global variable in one file then that global variable can be accessed in all the 10 files.
     this is the disadvantage of global variable to avoid this we need to use iife.
     
     example-1:
     var a=10;
     var b=10;
     console.log(a+b);

     in the above example-1 a and b are global.
     a and b are accessed in all the files which are linked to the page then the a and b maybe overrride.
     due to this overriding result may change /alter.
     to avoid this we should include variables a nd b in a function.

     example-2:
     function add(){
        var a=10;
        var b=10;
        console,log(a+b);
     }
    add();//function call

    in the above example-2 the variables a and b are not global but there is one problem in this code.
    i.e here add()  is a global function. if somebody from another file may call the add() which is
    undesirable.
    to avoid the above problem we use iife.
*/
//iife example

(function(){
    var a=10;
    var b=10;
    console.log(a+b);
})();

/*
C:\Users\shiva sai\node\assignment 3>node iife
20 */

/* in the above iife example the variables a and b are not global and functon is a ananomous function.
so we cannot call the function from another other files.
iife is also a function which calls automatically when the program starts execution.

*/
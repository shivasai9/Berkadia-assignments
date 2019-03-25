/*
 usually while we are calling a function we send some arguments
 */

 var add=function(passed)
 {
     var inner=2;
     return passed+inner;
 }
 console.log((add(3)));
 /*
C:\Users\shiva sai\node\assignment 3>node closures
5 */

/*
   but in java script we can get the value by without passing the parameters.
*/
var passed=3;
var addto=function()
 {
     var inner=3;
     return passed+inner;
 }
 console.log((addto()));
 /*
C:\Users\shiva sai\node\assignment 3>node closures
6
 */

/* in the above program the variables which are defined outside the function are automatically available 
inside the function because the java script uses lexical scoping.
what is lexical scoping???
  any varibles which are inside the function cannot be accessed outside the function and any variables 
  which are outside the function can be accessed inside the function is called lexical scoping.
  Any function where we using the variable from outside the scope are actually closures.
  Closures are nothing but the functions which preserves the data.
  it preserves the data inside the function as a property closure and when we execute it then it uses 
  the closure(inner preserved data) for calculations in the function. 
 */

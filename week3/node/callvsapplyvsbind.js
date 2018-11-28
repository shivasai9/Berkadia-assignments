/*
callvsapplyvsbind?????
  generally we have objects with properties and methods.
  if 2 objects having same method then we need to write that method seperately 2 times this is a diadvantage.
  to avoid this we will use call, apply and bind.
  we will write methods seperately and using call, apply, bind we use this methods on objects.
  by this we can write common methoods for various objects.
*/

var obj={num:2}
var add=function(a,b,c){
    return this.num+a+b+c;
}
console.log(add.call(obj,1,2,3));//this call function will attach the function to the object. 

/*
C:\Users\shiva sai\node\assignment 3>node callvsapplyvsbind
8
*/
/*
   the disadvantage of the call function is if there are 100 arguments then it is difficult to pass it.
   to avoid this we need to use apply.
   apply will have 2 arguments one is object and another one is array of arguments.
*/

var obj={num:2}
var add=function(a,b,c){
    return this.num+a+b+c;
}
var arr=[1,2,3];
console.log(add.apply(obj,arr));
/*
C:\Users\shiva sai\node\assignment 3>node callvsapplyvsbind
8
 */
/*
   apply iss same as call but the main difference is arguments.
   in call function we have the list of arguments.
   in apply function we have array as a argument.
*/
/*
  bind function takes only one argument that is object to which we want to add methods .
  bind function will return a function.
  by using that returned function we nedd to send arguments. 
*/

var obj={num:2}
var add=function(a,b,c){
    return this.num+a+b+c;
}
var returnedfunction =add.bind(obj);
console.log(returnedfunction(1,2,3));

/*
C:\Users\shiva sai\node\assignment 3>node callvsapplyvsbind
8
*/


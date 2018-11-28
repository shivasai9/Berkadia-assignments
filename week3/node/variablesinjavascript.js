/*
  java script supports 5 types of variables they are:
  1.number
  2.string
  3.boolean
  4.undefined
  5.null
1.number:
   it is a type which we can assign to a variable.
   numbers are 64bit floating point numbers.
   numbers are not integers.

2.string:
   strings are sequences of unicode characters(16-bit).
   in java script there are no character datatype every thing is a string.
   a character in java script 

3.boolean 
   it can be either true or false.

4.undefined
   undefined is a type in javascript which contains only one value called undefined.
   in java script if we declare a variable with var immediately it explicitly assign a value to it 
   that value is undefined.

   var variable;
   here we have no type information with it so, it assigns a value of type undefined. 

5.null
   null is an another datatype in javascript which contains only one value called null. 

*/

var variable;
console.log(variable);
var variable=null;
console.log(variable);

/*
C:\Users\shiva sai\node\assignment 3>node variablesinjavascript
undefined
null */

/*
   undefined VS null
     both are non values and they will be present in the absence of values.

     practical example:
         if we are filling a form contains 3 fields
           1.firstname
           2.middlename
           3.lastname
        when a variable is undefined it means that the value has not been entered.
        if we don't have a middle name then assign it to null.
        if middle name is undefined it means that we didn't enter the data.
        if the middle name is of type null, it means that we enter the data which doesn't have a value.

           var firstname;
           var middlename;
           var lastname;

if we dont't have middlename then we will skip it and the value of middlename will be undefined.
by seeing this the other person doesn't knows whether u forget to type middlename or u don't have a middlename.
to avoid this confusion we declare middelname as null which means that u don't have any middlename.        

*/
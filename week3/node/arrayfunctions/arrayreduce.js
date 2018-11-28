/*
  what is array reduce()?????
   it reduces all the values in an array into a single result.
   it uses callback function just like map,filter methods.
   syntax:
   let result=array_name.reduce(callback_function(),initialvalue)
   {
       code.......
   }
*/

let  numbers=[1,2,3,4,5,6,7,8,9];
let sum=numbers.reduce(function(previousvalue,currentvalue){
    return previousvalue+currentvalue;
},0)
console.log("sum is",sum)

/* 
  C:\Users\shiva sai\node\assignment 3\arrayfunctions>node arrayreduce
sum is 45
*/
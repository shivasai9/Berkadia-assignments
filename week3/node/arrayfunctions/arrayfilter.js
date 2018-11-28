/* 
  what is array filter()????
    it is similar to array map method but it returns only when the condition is true.
    syntax:
    let new_array=array.map(function(item,index,array){
        code.....
        return true/false
    })

    if the function returns true then the current element from the array will be passeed on to the new array
    if the function returns false then the current element from the array will not be passeed on to the new array 
*/ 

let numbers=[1,2,3,4,5,6,7,8,9];
let odd_numbers=numbers.filter(function(num){
    return num&1;
})
console.log("odd numbers are", odd_numbers)

/*
C:\Users\shiva sai\node\assignment 3\arrayfunctions>node arrayfilter
odd numbers are [ 1, 3, 5, 7, 9 ]
*/
/* what is promise???
     Functionally both promises and callback functions are similar but 
     1. promises are readable
     2. if we use promises then we have minimal lines of code 
     3. if we use promises in our code then it is easy to revise the code in future
     
     callback leads to callback hell to avoid this we need to use promises. if we want to call so many 
     functions if some functions depends on other functions then it is recomended to use promises.  */ 
    
     
//Implementation of promise

var promise=new Promise((resolve,reject)=>{
    resolve(2);
})
promise.then(a).then(b).then(c).then(function(result){
    console.log(result);
})
function a(value){
    return value+2;
}    
function b(value){
    console.log(value);
    return value+2;
}    
function c(value){
    console.log(value);
    return value+2;
}    

/*
C:\Users\shiva sai\node\assignment2>node promise
4
6
8
   */ 
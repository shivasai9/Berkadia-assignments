/*
  what is async and await????
    by using this we can run the synchronous code asynchronously. but this code looks like synchronous.
    async and await can be used on the functions which returns the promisses.
    for error handling we need to use try and catch block.
*/

const fs=require('fs');
var obj={};
function a(){
    return new Promise(function(resolve,reject){
         fs.readFile('file1.txt','utf-8',(err,data)=>{
             if(!err)
             resolve(data);
         })
    })
}

function b(){
    return new Promise(function(resolve,reject){
         fs.readFile('file1.txt','utf-8',(err,data)=>{
            if(!err)
             resolve(data);
         })
    })
}

async function main(){
obj['data1']=await a();
obj['data2']=await b();
console.log(obj);
}
main();

/*
C:\Users\shiva sai\node\assignment 3>node asyncandawait
{ data1: 'this is file1', data2: 'this is file1' }
 */

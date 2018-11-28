/*
using create method
here if we want to create any object which has similar properties of existing object then we can use
create method to create object.
*/

let obj1={
    name:"shiva sai"
} 


let obj2=Object.create(obj1,{
    department:{
        writable:true,  //it is used whether to change the value or not.if it is true that means we can change the value otherwise not
        enumerable:true, //if it is true then it means that the value will appear on the console otherwise it will not appear on console    
        configurable:true,
        value:"ece"
    },
    Rollnumber:{
        writable:true,
        enumerable:true,
        configurable:true,
        value:1
    }
})
console.log(typeof(obj2))
console.log(obj2,"inherited property from obj1 is name:",obj2.name);
/*
C:\Users\shiva sai\node\assignment 3\variouswaysofcreatingobjects>node method2
object
{ department: 'ece', Rollnumber: 1 } 'inherited property from obj1 is name:' 'shiva sai' */
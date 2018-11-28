
/*using function + new keyword
    in this method the function should not have return statement.
    if we add new before the calling function then it returns object.
    by this method we can reuse this object.
*/

let obj=function(value1,value2,value3){
    this.name=value1;
    this.department=value2;
    this.Rollnumber=value3;
}
let object=new obj("shiva sai","ece",1);
console.log(typeof(object));
console.log(object);
/*
C:\Users\shiva sai\node\assignment 3\variouswaysofcreatingobjects>node method3
object
obj { name: 'shiva sai', department: 'ece', Rollnumber: 1 }
 */
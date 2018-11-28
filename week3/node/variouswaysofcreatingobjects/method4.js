/*using functions with closures
    here in this method we will call the function which returns the properties of the object.
 */

 let obj=function(value1,value2,value3){
     let _name=value1;
     let _department=value2;
     let _Rollnumber=value3;
     return{
         name:_name,
         department:_department,
         Rollnumber:_Rollnumber
     }
 }
 
 let object=obj("shiva sai","ece",1);
 console.log(typeof(object));
 console.log(object);
 /*
C:\Users\shiva sai\node\assignment 3\variouswaysofcreatingobjects>node method4
object
{ name: 'shiva sai', department: 'ece', Rollnumber: 1 }
 */
/* what is inheritance????
    object oriented programming languages support inheritance. since java script is also a object oriented 
    programming language it supports inheritance.
    in object oriented programming languages like c# and java to implement inheritance, a class inherits
    from another class. in java script we don't have the concept of class, so inheritance in java script
    is prototype based. 
    To implement inheritennce in java script, an object inherits from another object.
    
    what is prototype concept??????
    by default every function will have a properties and methods called prototype.
    by default this property is empty we can add properties/methods to this prototype.
    generally we create a object for a function. then for that function it automatically inherits the 
    properties/ methods of that function.

*/

var employee =function(name)
{
    this.name=name;
}

employee.prototype.getname=function()
{
    return this.name;
}
var permanentemployee= function(salary)
{
    this.salary=salary;
}

var employee1=new employee("shiva");
permanentemployee.prototype=employee1;//by this statement pe object inherits the properties of employee1  object.
var pe=new permanentemployee(50000);
console.log(pe.getname());

/*
C:\Users\shiva sai\node\assignment 3>node inheritance
shiva*/
/*
    in the above example getname is the method of the employee function prototype.
    here pe object will inherit the properties of employee1 object.
*/
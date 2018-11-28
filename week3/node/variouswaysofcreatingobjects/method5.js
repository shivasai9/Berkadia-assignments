//using java script class

class obj{
    constructor(value1,value2,value3){
        this.name=value1;
        this.department=value2;
        this.Rollnumber=value3;
    }
}

let object=new obj("shiva sai","ece",1);
console.log(typeof(object));
console.log(object);
/*
C:\Users\shiva sai\node\assignment 3\variouswaysofcreatingobjects>node method5
object
obj { name: 'shiva sai', department: 'ece', Rollnumber: 1 }
 */
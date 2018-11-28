/*
 what is forof loop?????
    it is similar to forin loop. if there is an object has different properties if that property type 
    is an array then we can directly access the elements of that array by using forof loop.
    syntax:
    for(variable of object.label_name)
    {
        code.......
    }
*/

let object={
    "names":["shiva","sai","uthej"],
    "dept":["ece","cse","eee"],
    "rollno":[1,2,3]
};
for (let label of object.names){
   console.log(label);     
}

/*  
C:\Users\shiva sai\node\assignment 3\forloops>node forof
shiva
sai
uthej
*/ 
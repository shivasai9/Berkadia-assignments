/*
 what is forin loop???
   in normal for loop the loop will execute untill the condition is satisfied. to check the condition we wil
   use array.length function. this process will work only for arrays but we cannot use the length function 
   to object. so we cannot use normal for loop for objects.   
   if we want to loop the piece of code for the objects then we can use forin loop.
   syntax;
    for(variable in object_name)
    {
        code........
    } 
    here the code will execute for each and every element of the object.
    here the variable will store the label of the object element in each iteraion. 
*/

let object={"name":"shiva","dept":"ece","rollno":1};
for (let label in object){
   console.log("in",label, "we have", object[label]);     
}

/*
C:\Users\shiva sai\node\assignment 3\forloops>node forin
in name we have shiva
in dept we have ece
in rollno we have 1
*/
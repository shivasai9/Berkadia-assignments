/* what is for loop????
 if we want to execute a piece of code multiple times  then we can use for loop.
 syntax:
  for(variable;condition;operation on variable)
  {
      code........
  }
  the code in the for loop executes untill the condition is satisfied.if the condition is failed then it 
  comes of out of loop

*/

let array=[{"name":"shiva"},{"name":"uthej"},{"name":"ravi"}];
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}

/*
C:\Users\shiva sai\node\assignment 3\forloops>node forloop
{ name: 'shiva' }
{ name: 'uthej' }
{ name: 'ravi' }*/
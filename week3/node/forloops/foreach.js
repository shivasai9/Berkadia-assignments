/* 
  what is foreach loop???
   foreach loop works on the array of items.
   syntax:
   arrar_name.forEach(function(item,index,array))
   {
       code.........
   }
   for every iteration foreach loop calls an element from array and returns 3 things they are
    1.element name(item)
    2.element index.
    3.entire array
*/

let array=[{"name":"shiva"},{"name":"uthej"},{"name":"ravi"}];
array.forEach(function(item,index,array){
    console.log(item,index,array);
})

/*
C:\Users\shiva sai\node\assignment 3\forloops>node foreach
{ name: 'shiva' } 0 [ { name: 'shiva' }, { name: 'uthej' }, { name: 'ravi' } ]
{ name: 'uthej' } 1 [ { name: 'shiva' }, { name: 'uthej' }, { name: 'ravi' } ]
{ name: 'ravi' } 2 [ { name: 'shiva' }, { name: 'uthej' }, { name: 'ravi' } ]

*/
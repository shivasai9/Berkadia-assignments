 /*
   what is arraymap()????
     it is similar to foreach loop but the difference is foreach doesn't returns anything but map()
     returns the array.
     syntax:
     let new_array=array.map(function(item,index,array){
         code.......
         return .....
     })
        The map method gives us the new array whatever we return it becomes the contents of the new array.  

*/

let array=["shiva","uthej","nikhil"];
let namelength=array.map(function(item,index,array){
    return item.length;
})
console.log(namelength);

/*
C:\Users\shiva sai\node\assignment 3\arrayfunctions>node arraymap
[ 5, 5, 6 ]
*/
/* what is fs module???
    fs stands for file system
    if we want to perform a file i/o that is reading from a file or writing to a file then we can 
    use fs module
    every function in fs module fs module will have both synchronous and asynchronous form   */

//reading from a file and writing to a file example
// The content present in read.txt is "hi my name is shiva sai."

var fs= require('fs');//require function includes the fs module into current file. 

var data=fs.readFileSync('read.txt','utf-8');

/*readfilesync function reads the content of the read.txt synchronously and 
encodes into utf-8 format and stores into data variable*/

fs.writeFileSync('write.txt',data);

//writefilesync function writes the content holded by data into write.txt file synchronously 

var data=fs.readFileSync('write.txt','utf-8');
console.log(data);


/*output
C:\Users\shiva sai\node\assignment2>node fsmodule
hi my name is shiva sai.*/

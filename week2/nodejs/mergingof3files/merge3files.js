
//merging of three files data and store it in another file using callback functions

var fs=require('fs');
var promise1=require('promise');


//synchronous reading

var read1=fs.readFileSync('read1.txt','utf-8');
var read2=fs.readFileSync('read2.txt','utf-8');
var read3=fs.readFileSync('read3.txt','utf-8');
con_data=read1+read2+read3;
fs.writeFileSync('dest.txt',con_data);


// Asynchronous reading and writing of files using call backs.
var con_data="";
fs.readFile('read1.txt','utf-8',(err,data1)=>{
    if(!err)
    {
        con_data+=data1;
        fs.readFile('read2.txt','utf-8',(err,data2)=>{
            if(!err)
            {
                con_data+=data2;
                fs.readFile('read3.txt','utf-8',(err,data3)=>{
                    if(!err)
                    {
                        con_data+=data3;
                        fs.writeFile('dest.txt',con_data,()=>{

                        });
                    }
                })
            }
        })       
    }
    
})

// asynchronous file reading and writing using promises.

var promise =new promise1(function(resolve,reject){
    resolve("");
})

promise.then(a).then(b).then(c).then(function(res){
    fs.writeFileSync('dest.txt',res);
})

function a(){
    return fs.readFileSync('read1.txt','utf-8');
}

function b(read2){
    return read2+fs.readFileSync('read2.txt','utf-8');
}

function c(read3){
    return read3+fs.readFileSync('read3.txt','utf-8');
}
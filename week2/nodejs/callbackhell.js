/*callback hell???
    Nesting of callback functions leads to callback hell because if we write 100 callback functions 
    one inside the other then the program becomes more complex and we cannot understand the code properly
    and due to this callback hell the code will become more confusing    */


//implementation of callback hell

 a(2,function(resa,err){
        if(!err)
        {
            console.log(resa);
            b(resa,function(resb,err){
                if(!err)
                {
                    console.log(resb);
                    c(resb,function(resc,err){
                        if(!err)
                        {
                            console.log(resc);
                        }
                    })
                }
            })
        }
    })

    function a(value,callback){
        callback(value+2,false);
    }    
    function b(value,callback){
        callback(value+2,false);
    }    
    function c(value,callback){
        callback(value+2,false);
    }    


/* In the above code there are only 3 callback functions so it may look simple and easy but in real time 
     applications the code contains approximately more than 30 callback functions it is very difficult
     to read and understand that code this is the main disadvantage of the callback functions */
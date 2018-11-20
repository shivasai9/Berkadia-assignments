/*    call back function is a asynchronous altrenate for a function. a call back function is invoked 
   only when particular task is completed. It helps to convert the blocking code into 
   non-blocking code. 
      for example if there are there functions a(), b(), c(). The b() will execute only when a() is 
   executed successfully without error. if there is any error in the execution of a() then b()and c()
   will not execute.
      simillarly the c() will execute or called only when a() and b() are executed successfully otherwise
      it will not called.  
        */
// implementation of callback functions

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

  /*  
    C:\Users\shiva sai\node\assignment2>node callback
4
6
8
   */
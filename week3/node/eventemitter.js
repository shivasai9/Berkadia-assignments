/*
  event is a signal that something has happened in our application.
*/

const eventemitter=require('events');
const emitter=new eventemitter();
emitter.on('messagelogged',function(){  //it is the event listener. ehenever messagelogged event occurs then then code in the function starts execution.
    console.log("listener called....");
})
emitter.emit('messagelogged');//it will emitt the messagelogged event

/*
C:\Users\shiva sai\node\assignment 3>node eventemitter
listener called.... */
/*flipping a coin 
if the random number is even then it is head.
if the random number is odd then it is tail. 
*/

module.exports=(req,res)=>{
    x=Math.floor((Math.random())*100);
    const val= ((x)%2==0)?'heads':'Tails';
    return 'The flipped coin is '+val;
};

/*
C:\Users\shiva sai\Desktop\berkadia\theory questions\assignment5\node.js microservice>npm start

> node.js-microservice@1.0.0 start C:\Users\shiva sai\Desktop\berkadia\theory questions\assignment5\node.js microservice
> micro

micro: Accepting connections on port 3000

*/
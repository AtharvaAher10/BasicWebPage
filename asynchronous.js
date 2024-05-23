// event looping :->  // asynchronous setTimeout
console.log("start");
setTimeout (function as(){   //setTimeout method goes and call web api and these give access of timer feature of browser
    console.log("this is async JS!")
 },2000);
console.log("end");



//  setTimeout runs after interval of time at once 
console.log("again start ");
 function task1(){
    console.log("this is task");
 }
 setTimeout(task1, 3000);

 console.log("end task");




 // it runs after interval of time continuosly

console.log("this is new ");
 let a = setInterval( function ath(){
    console.log("this is set interval ");
}, 2000);
clearInterval(a);
console.log("end ");




//  callback function :->
function myName(name, callback){
    console.log("Hello, "+ name + "!");
    callback();
}

function msg(){
    console.log("goodbye")
}
myName("aniket" , msg); // call the myName function and pass the msg as  callback to myName


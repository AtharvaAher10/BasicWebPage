function init(){
    var name = "Atharva";
    function dispName(){
        console.log(name);
    }
    dispName();
}
init();

// sum of the numbers 

function sum(){
    let a = 10;
    let b = 20;
    sum = (a+b);
    function summation(){
        console.log(sum);
    }
    summation()
}
sum();


//   

function outer(){
    let name = "john";
    function inner(){
        console.log("hello" + name);
    }
    inner();
}
outer();


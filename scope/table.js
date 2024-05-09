function multiply(number){
    return function(){
        console.log("multiplication table for" + number + ":");
        for (let i=1;i<=10;i++){
            console.log(number + " * " + i + " = " + (number * i) );
        }
    }
}
var multable5 = multiply(5);
multable5();
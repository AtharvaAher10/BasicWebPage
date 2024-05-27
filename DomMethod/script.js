    const element = document.getElementById("intro");
    const element1 = document.getElementById("hello");
    document.getElementById("hello").innerHTML = "this is the text : " + element.innerHTML;
    document.getElementById("intro").innerHTML = "its my js code : " + element1.innerHTML; 

    const x = document.getElementsByClassName("heading1");
    document.getElementById("cls").innerHTML = "we can get element using className" + x[0].innerHTML;
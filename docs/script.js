// window.alert("Good Day!");

function moveThis(){


let id = null;
let element = document.getElementById("animated");
let position = 0;
clearInterval(id);
id = setInterval(frame, 5);

function frame(){

    if (position == 350) {
        clearInterval(id);


    }

    else {

        position++;
        element.style.top = position + "px";
        element.style.left = position + "px";
    }
}     
}

// create a function 
function myFunction(arg1, arg2){

    this.firstName = arg1;
    this.lastName = arg2;
}

const myObj = new myFunction("John", "Doe");

document.getElementById("test2").innerHTML = myObj.firstName;

























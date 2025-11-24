
function validateForm(){

    let fname = document.forms["frm1"]["fName"].value;
    let lname = document.forms["frm1"]["lName"].value;
    let num = document.forms["frm1"]["num"].value;

    if (fname == ""){
        document.getElementById("err").innerHTML = "First Name has to be Filled out!";
        return false;

    }
    else if (lname == ""){
        document.getElementById("err").innerHTML = "Last Name has to be filled out!";
        return false;
    }

    else if (isNaN(num) || num === undefined || num === null || num < 0 || num > 100 || num == ""){

        document.getElementById("err").innerHTML = "Number is not valid!";
        return false;
    }

    else {
        document.getElementById("err").innerHTML = "Thank you for your Input!";
    }
}

// create and display an array 
const numbers = [12, 59, 100, 90, 32, 78];
document.getElementById("test1").innerHTML = numbers;

numbers.sort(function(a, b){return b - a});
document.getElementById("test1").innerHTML = numbers;

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





















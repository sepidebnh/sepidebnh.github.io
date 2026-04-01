// document.getElementById("test").innerHTML = "Hello JavaScript!";

// var name1 = "John Doe";
// let name2 = "Jane Doe";
// const num = 12;

// let name = name1 + name2;

// document.write(name);

// // window.alert(name);

// console.log(num);

// var num1 = 56;
// //here the value of num1 is 56 

// {

//     var num1 = 90;
//     //here the value of num1 is 90
//     var num1 = 12;
// }

// // window.alert(num1);
// //here the value of num1 is 90

// let num2 = 65;
// //here the value of num2 is 65

// {

//     let num2 = 45;
//     //here the value of num2 is 45
//     num2 = 78;
// }

// console.log(num2);
// //here the value of num2 is 65


function myFunction1(){

    document.getElementById("demo1").style.color = "red";
    document.getElementById("demo1").style.fontSize = "56px";
}

function myFunction2(){

    document.getElementById("demo2").src = "./images/background.jpg";
}

function myMove(){

    let pos = 0;
    let element = document.getElementById("animate");
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame(){

        if (pos == 450){

            clearInterval(id);
        }

        else {

            pos++;
            element.style.left = pos + "px";
            element.style.top = pos + "px";
        }
    }
}

function validateForm() {

    let elem = document.forms["frm1"]["fName"].value;

    if (elem == ""){

        window.alert("Name should be filled out!");
        return false;
    }

    else {

        window.alert("Thank you for your Input!");
        return true;
    }
}



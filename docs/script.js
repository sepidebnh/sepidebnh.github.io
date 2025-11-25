

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


myFunction = (a, b) => { return a * b}; 


function validateForm(){

   let fname = document.forms["frm1"]["fName"].value;
   let lname = document.forms["frm1"]["lName"].value;
   let num = document.forms["frm1"]["num"].value;

   if (fname == "") {

    document.getElementById("err").innerHTML = "First Name has to be filled out!";
    return false;
   }
   else if(lname == "" || lname.includes("doe")){
    document.getElementById("err").innerHTML = "Last Name has to be filled out!";
    return false;
   }

   else if (num == "" || isNaN(num) || num < 0 || num > 100 || num == null || num == undefined){
      document.getElementById("err").innerHTML = "Number has to be filled out and to be Valid!";
      return false;
         
   }

   else {

    document.getElementById("err").innerHTML = "Thank you for your Input!";
    return true;

   }
}

var num1 = 45;
// here the value of num1 is 45
var num1 = 32;


{

    var num1 = 78;
    // here the vakue of num1 is 78
    var num1 = 90;
}

document.write(num1);
//here the value of num1 is 78


let num2 = 89;
// here the num2 is 89

{

    let num2 = 54;
    //here the value of num2 is 54
    
}

document.write(num2);

// here the value of num2 is 89


let item1 = document.getElementsByClassName("intro");
item1[1].style.color = "purple";

let item2 = document.getElementsByTagName("p");
item2[0].style.border = "2px solid red";


function myFunction(a, b){

   return a * b;
}

document.getElementById("test2").onclick = function(){

      document.getElementById("test1").style.backgroundColor = "yellow";
}

document.getElementById("test3").addEventListener("click", myFunction);

document.getElementById("test3").addEventListener("mouseenter", function(){

    document.getElementById("test3").style.color = "green";

});

const names = ['john', 'harper', 'jane', 'sarah', 'andy'];
names.push("tony");
names.pop();

names.unshift("brian");
names.shift();






















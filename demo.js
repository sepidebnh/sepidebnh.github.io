// this is the external demo.js on the Homepage

document.getElementById("test1").innerHTML = "Hello World!";

document.getElementById("test2").style.backgroundColor = "lightblue";
document.getElementById("test3").src = "images/ocean.jpg";

document.write("Hello JavaScript!");


window.alert("Hello There!");

console.log("This is an error on line 3");

let firstName = "Lisa";
let lastName = "Harper";

let fullName = firstName + lastName;

document.getElementById("test5").innerHTML = fullName;


var num2 = 4;
// here the value of num2 is 4

{

    let num2 =  "Mary Smith";

    // here the value of num2 is 5
}

//here the value of num2 is 5

function myFunction(){

    document.getElementById("test6").style.color = "blue";
}

function functionOne(){

    document.getElementById("test12").style.display = "block";
}

function functionHideOne(){

    document.getElementById("test12").style.display = "none";
}

function calNum(a, b){

   return a + b;
}


function myFunctionFour(){

    

    document.getElementById("test11").style.color = "lightblue";
    document.getElementById("test13").src = "../images/ocean.jpg";
}


let element01 = document.getElementsByClassName("intro");

function myFunctionFive(){

    for(let i=0; i < element01.length;i++){
        element01[i].style.backgroundColor = "pink";
    
    }
}

let element02 = document.getElementsByTagName("img");

element02[0].src = "/images/ocean.jpg";

let cars = ["Toyota", "Fiat", "Volvo", "Audi", "BMW"];

cars[0] = "Benz";
cars.push("Nissan");
cars.pop();

cars.shift();
cars.unshift("Benz");

let text = "";
for(let j=0; j < cars.length; j++){

   text += cars[j] + "<br>";
}

document.getElementById("test15").innerHTML = text;

let day = new Date().getDay();

switch(day){

    case 0:
        alert("Enjoy the weekend");
        break;
    case 1:
        alert("Happy Monday");
        break;
     case 2:
        alert("Happy Tuesday");
        break;  
     case 3:
        alert("happy Wednesday");
        break;
     default:
        alert("Enjoy your Day");

}

let hour = new Date().getHours();
 if (hour < 12) {

    console.log("Good morning");
 }
 else if (hour < 18) {

    console.log("Good afternoon");
 }

 else {

    console.log("Good evening");
 }

// const PI = 3.14159;

// Math.PI;
Math.random();
Math.ceil();
Math.floor();
Math.min(3, 14, 56);
Math.max(23, 56, 19);


let person = {
    firstName: "John",
    lastName: "Doe",
    yearOfBirth: 2020,
    nationality: ["Canadian","Japanese"],
     age: function(){
         let x = 2023 - this.yearOfBirth;
        return x;
     },
     num10 : 14
};

console.log(person.firstName);
console.log(person.yearOfBirth);
console.log(person.age());


















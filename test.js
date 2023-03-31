function validateTxt(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mark1 = parseInt(document.getElementById("markOne").value);
    let mark2 = parseInt(document.getElementById("markTwo").value);

    if (fname == ""){

        document.getElementById("error").innerHTML = "The first Name should be filled out";
    }

    else if (lname == ""){
        document.getElementById("error").innerHTML = "The last Name should be filled out";

    }

    else if (isNaN(mark1) || mark1 < 0 || mark1 >100) {

        document.getElementById("error").innerHTML = "The Mark 1 is invalid";

    }

    else if(isNaN(mark2) || mark2 < 0 || mark2 >100) {

        document.getElementById("error").innerHTML = "The Mark 2 is invalid";

    }

    else {

        document.getElementById("error").innerHTML = "Thank you for your input";

    }
}


function printResult(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mark1 = parseInt(document.getElementById("markOne").value);
    let mark2 = parseInt(document.getElementById("markTwo").value);

    let average = (mark1 + mark2) /2;

    if (average >=90) {

        document.getElementById("result").innerHTML = fname + lname + " Awesome";
    }

    else if (average <90 &&  average >=80) {
        document.getElementById("result").innerHTML = fname + lname + " Very Good";


    }

}
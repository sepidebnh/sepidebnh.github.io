function validateForm(){

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mark1 = parseInt(document.getElementById("markOne").value);
    let mark2 = parseInt(document.getElementById("markTwo").value);

    if (fname == ""){

        document.getElementById("error").innerHTML = "The first Name is not filled out";
    }
    else if (lname == "") {

        document.getElementById("error").innerHTML = "The Last Name is not filled out";

    }
    else if (isNaN(mark1) || mark1 < 0 || mark1 > 100) {

        document.getElementById("error").innerHTML = "The Mark 1 is not valid";

    }
    else if (isNaN(mark2) || mark2 < 0  && mark2 > 100) {

        document.getElementById("error").innerHTML = "The Mark 2 is not valid";

    }
    else {

        document.getElementById("error").innerHTML = "Thank you for your input";

    }
}



function calculateAmount(){

    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let phone = document.getElementById("pNumber").value;
    let product1 = parseInt(document.getElementById("p1").value);
    let product2 = parseInt(document.getElementById("p2").value);
    let product3 = parseInt(document.getElementById("p3").value);

    if (fName == "") {

        document.getElementById("error1").innerHTML = "First Name should be completed!";
    }

    else if (lName == "") {

        document.getElementById("error1").innerHTML = "Last Name should be completed!";

    }

    else if (phone == "") {

        document.getElementById("error1").innerHTML = "Phone should be a number!";

    }

    else if (isNaN(product1)) {

        document.getElementById("error1").innerHTML = "Product1 should be valid a number!";

    }

    else if (isNaN(product2)) {

        document.getElementById("error1").innerHTML = "Product2 should be valid a number!";

    }
    else if (isNaN(product3)) {

        document.getElementById("error1").innerHTML = "Product3 should be valid a number!";

    }

    else {
        alert("Thank you for your valid input!");
        let total = product1 + product2 + product3;
    document.getElementById("result1").innerHTML = total;
    let tax = total * (13/100);

    document.getElementById("resultTax").innerHTML = "Total: " + total + "Tax: " + tax + "Final Total: " + (total + tax);

    }

    
}



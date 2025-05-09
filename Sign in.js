function validation(){

var valid = true;

var email = document.getElementById("email").value;

var password = document.getElementById("password").value;

if(email == "" && password == ""){
alert("All fields are required!");
}


else if(email == ""){
 alert("Email field is required!");
 valid = false;
}

else if (!email.includes("@")) {
 alert("The email must include @ !");
 valid = false;
}

else if(!email.includes(".")){
 alert("The email must include . !");
 valid = false;
}

else if(password == ""){
alert("Password field is required!");
 valid = false;
}

else if (password.length < 8) {
 alert("Password must be at least 8 characters long!");
 valid = false;
    }


return valid;

}
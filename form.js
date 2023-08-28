function ValidData() {
    let flag = true;

    // Validation for Email Id
    const email = document.getElementById('email').value
    var checkEmail = /^([a-z0-9.-_])+@+([a-z0-9-._]).([a-z]{3})/
    if (email == "") {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emerror").style.color = "red";
        document.getElementById("emerror").innerText = "! Enter your email.";
        flag = false;
    }
    else if (!checkEmail.test(email)) {
        document.getElementById("emerror").style.color = "red";
        document.getElementById("emerror").innerText = "Please Enter Valid Email.";
        flag = false;
    }
    else {
        document.getElementById("email").style.borderColor = "";
        document.getElementById("emerror").innerText = "";
        document.getElementById("email").classList.remove("emerror");
    }

    // Validation for Password
    const password_num = document.getElementById('password').value
    if (password_num == "") {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("passerror").style.color = "red";
        document.getElementById("passerror").innerText = "! Enter your password.";
        flag = false;
    }
    else {
        document.getElementById("password").style.borderColor = "";
        document.getElementById("passerror").innerText = "";
        document.getElementById("password").classList.remove("passerror");
    }

    // Validation for Re-type Password
    const re_password = document.getElementById('Repassword').value
    if(re_password == ""){
        document.getElementById("Repassword").style.borderColor = "red";
        document.getElementById("reperror").style.color = "red";
        document.getElementById("reperror").innerText = "! Enter your confirm pasword.";
        flag = false;
    }
    else if (re_password != password_num) {
        document.getElementById("Repassword").style.borderColor = "red";
        document.getElementById("reperror").style.color = "red";
        document.getElementById("reperror").innerText = "! Password and Confirm Password dosn't match.";
        flag = false;
    }
    else {
        document.getElementById("Repassword").style.borderColor = "";
        document.getElementById("reperror").innerText = "";
        document.getElementById("Repassword").classList.remove("reperror");
    }

    // Validation for Mobile Number
    const mobile_num = document.getElementById('mobile').value
    var checkmobile = /^[0-9]{10}$/
    if(mobile_num == ""){
        document.getElementById("mobile").style.borderColor = "red";
        document.getElementById("mobileerror").style.color = "red";
        document.getElementById("mobileerror").innerText = "! Enter your mobile number.";
        flag = false;
    }
    else if (!checkmobile.test(mobile_num)) {
        document.getElementById("mobile").style.borderColor = "red";
        document.getElementById("mobileerror").style.color = "red";
        document.getElementById("mobileerror").innerText = "! Please enter valid mobile number.";
        flag = false;
    }
    else {
        document.getElementById("mobile").style.borderColor = "";
        document.getElementById("mobileerror").innerText = "";
        document.getElementById("mobile").classList.remove("mobileerror");
    }

    // Validation for First Name
    const first_name = document.getElementById('fname').value
    if (first_name == "") {
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("fnameerror").style.color = "red";
        document.getElementById("fnameerror").innerText = "! Enter your first name.";
        flag = false;
    }
    else {
        document.getElementById("fname").style.borderColor = "";
        document.getElementById("fnameerror").innerText = "";
        document.getElementById("fname").classList.remove("fnameerror");
    }

    // Validation for Last Name
    const last_name = document.getElementById('lname').value
    if (last_name == "") {
        document.getElementById("lname").style.borderColor = "red";
        document.getElementById("lnameerror").style.color = "red";
        document.getElementById("lnameerror").innerText = "! Enter your last name.";
        flag = false;
    }
    else {
        document.getElementById("lname").style.borderColor = "";
        document.getElementById("lnameerror").innerText = "";
        document.getElementById("lname").classList.remove("lnameerror");
    }

    // Validation for Select a Country
    const country = document.getElementById('country').value
    if (country == "") {
        document.getElementById("country").style.borderColor = "red";
        document.getElementById("selecountry").style.color = "red";
        document.getElementById("selecountry").innerText = "! Enter your country.";
        flag = false;
    }
    else {
        document.getElementById("country").style.borderColor = "";
        document.getElementById("selecountry").innerText = "";
        document.getElementById("country").classList.remove("selecountry");
    }        
    return flag;
}
/*
Program Name: homework-4.js
Author: Viet Tran
Date Created: 2/7/2025
Date last edited: 5/1/2025
Version: 1.0
Description: MIS3371 Homework 4, Patient Registration Form Java.
*/
//dynamic data
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider
let slider = document.getElementById("range")
    let output = document.getElementById("range-scale")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

//first name validate js code
function validateFname(){
  fname = document.getElementById("fname").value.trim();
  var namePattern = /^[a-zA-Z'-]+$/;
  //checks if empty
  if (fname == ""){
    document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
    return false;
  } else if (fname != "") {
    if (!fname.match(namePattern)){
    document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
    return false;
  } else if (fname.length < 2){
    document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
    return false;
  } else if (fname.length > 30){
    document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
    return false;
  } else {
    document.getElementById("fname-error").innerHTML = "";
    return true;
  }
}
}
//middle initial validate js code
function validateMini(){
  mini = document.getElementById("mini").value;
  const namePattern = /^[A-Z]$/;

  //makes MI uppercase
  mini = mini.toUpperCase();
  document.getElementById("mini").value = mini;

  //checks that MI is one character
  if (!mini.match(namePattern)) {
    document.getElementById("mini-error").innerHTML = "Middle initial must be a single uppercase letter.";
  } else {    
    document.getElementById("mini-error").innerHTML = "";
    return true;
  }
}

//last name validate js code
function validateLast(){
  last = document.getElementById("last").value.trim();
  var namePattern = /^[a-zA-Z'-]+$/;
  //checks if empty
  if (last == ""){
    document.getElementById("last-error").innerHTML = "Last name field cannot be empty.";
    return false;
  } else if (last != "") {
    if (!last.match(namePattern)){
    document.getElementById("last-error").innerHTML = "Letters, apostrophes, and dashes only.";
    return false;
  } else if (last.length < 2){
    document.getElementById("last-error").innerHTML = "Last name cannot be less than 2 characters.";
    return false;
  } else if (last.length > 30){
    document.getElementById("last-error").innerHTML = "Last name cannot be more than 30 characters.";
    return false;
  } else {
    document.getElementById("last-error").innerHTML = "";
    return true;
  }
}
}
// dob validation js code
function validateDob(){
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be in the future."
        dob.value="";
        return false;
    } else if(date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be more than 120 years ago."
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}
// ssn validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    // regex for ssn pattern thing
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)){
        document.getElementById("ssn-error").innerHTML= 
        "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true
    }
}

// address 1 validation js code
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2){
        document.getElementById("address1-error").innerHTML = 
        "Please enter something on address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// city validate js code
function validateCity(){
  city = document.getElementById("city").value.trim();

  if(!city){
    document.getElementById("city-error").innerHTML = "City cannot be left blank.";
    return false;
  } else {
    document.getElementById("city-error").innerHTML = "";
    return true;
  }
}

// zip code validation js code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "") //removes any non-number and non-dash characters

    if (!zip){
        document.getElementById("zcode-error").innerHTML =
        "Zip code cannot be left blank.";
        return false;
    }

    if (zip.length > 5){
        zip = zip.slice(0,5); //removes all digits after first 5
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

// email validation js code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern thing for email

    if (email =="") {
        document.getElementById("email-error").innerHTML = 
        "Email cannot be empty.";
        return false;
    } else if (!email.match(emailR)){
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address."
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// phone number validation js code
function validatePhone() {
    const phoneInput = document.getElementById("phnum");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes all non numbers

    if (phone.length == 0) {
        document.getElementById("phnum-error").innerHTML = 
        "Phone number cannot be left blank.";
        return false;
    }

    const formattedPhone = 
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phnum-error").innerHTML = "";
    return true;
}

//username validation js code
function validateUser()
{
 user = document.getElementById("user").value;
 //converts user to lowercase
 user = user.toLowerCase();


 //display user in lowercase characters
 document.getElementById("user").value = user;
 if (user.length == 0)
 {
   document.getElementById("user-error").innerHTML = "Username cannot be blank";
   return false;
 }
 if (!isNaN(user.charAt(0)))
 {
   document.getElementById("user-error").innerHTML = "Username cannot begin with a number";
   return false;
 }


 //checks username consists of only letters, numbers, and underscores
 let regex = /^[a-zA-Z0-9_]+$/;
 if (!regex.test(user))
 {
   document.getElementById("user-error").innerHTML = "Username can only contain letters, numbers, or underscores";
   return false;
 }
 else if (user.length < 5)
 {
   document.getElementById("user-error").innerHTML = "Username must be at least 5 characters";
   return false;
 }
 else if (user.length > 30)
 {
   document.getElementById("user-error").innerHTML = "Username cannot exceed 30 characters";
   return false;
 }
 else
 {
   document.getElementById("user-error").innerHTML = "";
   return true;
 }
}

//validate password js code
function validatePassword()
{
 const pass = document.getElementById("password").value;
 const user = document.getElementById("user").value;
 //set up array
 const errorMessage = [];
 if (!pass.match(/[a-z]/))
 {
   errorMessage.push("Enter at least one lowercase letter");
 }


 if (!pass.match(/[A-Z]/))
   {
     errorMessage.push("Enter at least one uppercase letter");
   }


 if (!pass.match(/[0-9]/))
   {
     errorMessage.push("Enter at least one number");
   }


 if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/))
   {
     errorMessage.push("Enter at least one special character");
   }


 if (pass == user || pass.includes(user))
   {
     errorMessage.push("Password cannot contain username");
   }


 //displays error messages
 const errorContainer = document.querySelector(".pword-message");
 errorContainer.innerHTML = errorMessage
 .map((message) => `<span>${message}</span><br/>`)
 .join("");
}

//confirm password js code
function confirmPassword()
{
 pass1 = document.getElementById("password").value;
 pass2 = document.getElementById("cpassword").value;
 if (pass1 != pass2)
 {
   document.getElementById("pword2-error").innerHTML = "Passwords do not match";
   return false;
 }
 else
 {
   document.getElementById("pword2-error").innerHTML = "Passwords match";
   return true;
 }
}
//review user input js code
function reviewInput()
    {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
    for (i = 0; i < formcontent.length; i++)
    {
    if(formcontent.elements[i].value != "")
   {
    datatype = formcontent.elements[i].type;
    switch (datatype)
     {
       case "checkbox":
         if (formcontent.elements[i].checked)
         {
            formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
            formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
         }
         break;
       case "radio":
         if (formcontent.elements[i].checked)
         {
            formoutput = formoutput + "<tr> <td align='right'" + formcontent.elements[i].name + "</td>";
            formoutput = "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
         }
         break;


    case "button":
    case "submit":
    case "reset":
        break;
        default:
        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td";
        formoutput = formoutput + "<td class='output'>" + formcontent.elements[i].value + "</td></tr>";
     }
   }
 }
 if (formoutput.length > 0)
 {
   formoutput = formoutput + "</table>";
   document.getElementById("showInput").innerHTML = formoutput;
 }
}

//remove user input js code
function removeReview()
{
    document.getElementById("showInput").innerHTML = "";
}

//shows alert box when necessary js code
function showAlert(){
  var alertBox = document.getElementById("alert-box");
  var closeAlert = document.getElementById("close-alert");

  alertBox.style.display = "block";
  closeAlert.onclick = function (){
    alertBox.style.display = "none";
  }
}

//validate everything on form
function validateEverything(){
  let valid = true;

  if (!validateFname()){
    valid = false;
  }
  if (!validateMini()){
    valid = false;
  }
  if (!validateLast()){
    valid = false;
  }
  if (!validateDob()){
    valid = false;
  }
  if (!validateSsn()){
    valid = false;
  }
  if (!validateAddress1()){
    valid = false;
  }
  if (!validateCity()){
    valid = false;
  }
  if (!validateZcode()){
    valid = false;
  }
  if (!validateEmail()){
    valid = false;
  }
  if (!validatePhone()){
    valid = false;
  }
  if (!validateUser()){
    valid = false;
  }
  if (!validatePassword()){
    valid = false;
  }
  if (!confirmPassword()){
    valid = false;
  }
  if (valid){
    document.getElementById("submit").disabled = false;
  } else {
    showAlert();
  }
}

//cookie for remembering info input on form//
function setCookie(name, cvalue, expiryDays){
  var day = new Date();
  day.setTime(day.getTime() + (expiryDays*24*60*60*1000));
  var expires = "expires=" + day.toUTCString();
  document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie (name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      while (cookie.charAt (0) == ' ' ){
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) == 0 ){
        return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

var inputs = [
  {id: "fname", cookieName: "firstName"},
  {id: "mini", cookieName: "middleInitial"},
  {id: "last", cookieName: "lastName"},
  {id: "dob", cookieName: "dob"},
  {id: "phnum", cookieName: "phone"},
  {id: "ssn", cookieName: "ssn"},
  {id: "address1", cookieName: "address1"},
  {id: "city", cookieName: "city"},
  {id: "zcode", cookieName: "zipCode"},
  {id: "email", cookieName: "email"},
  {id: "user", cookieName: "userName"},
]

inputs.forEach(function(input){
  var inputElement = document.getElementById(input.id);
  //prefill input fields with value from the cookie
  var cookieValue = getCookie(input.cookieName);
  if (cookieValue !== ""){
    inputElement.value = cookieValue;
  }

  //set a cookie with the input value when field changes
  inputElement.addEventListener("input", function(){
    setCookie(input.cookieName, inputElement.value, 30);
  });

});

//greet the user with their name + message
var firstName = getCookie("firstName");
if (firstName !== "") {
  document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "! </br>";
  document.getElementById("welcome2").innerHTML = "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.";

  document.getElementById("new-user").addEventListener("click", function() {
    inputs.forEach(function(input){
      setCookie(input.cookieName, "", -1);
    })
    location.reload();
  })
}

// get references
var rememberMeBox = document.getElementById("rememberMe");
var fnameInput = document.getElementById("fname");
var welcome2 = document.getElementById("welcome2");

// load saved name from cookie
var savedName = getCookie("firstName");

// if a saved name exists, prefill the input and show new user checkbox
if (savedName !== "") {
  fnameInput.value = savedName;

  // welcome message
  document.getElementById("welcome1").innerHTML = "Welcome back, " + savedName + "!<br>";

  // create new user checkbox
  var newUserCheckbox = document.createElement("input");
  newUserCheckbox.type = "checkbox";
  newUserCheckbox.id = "newUserCheckbox";

  var newUserLabel = document.createElement("label");
  newUserLabel.htmlFor = "newUserCheckbox";
  newUserLabel.innerHTML = ` Not ${savedName}? Check this to start as a new user.`;

  welcome2.appendChild(newUserCheckbox);
  welcome2.appendChild(newUserLabel);

  newUserCheckbox.addEventListener("change", function () {
    if (this.checked) {
      // Clear cookies
      inputs.forEach(function (input) {
        setCookie(input.cookieName, "", -1);
      });
      location.reload();
    }
  });
}

// save cookie on first name input only if Remember Me is checked
fnameInput.addEventListener("input", function () {
  if (rememberMeBox.checked) {
    setCookie("firstName", fnameInput.value, 30);
  }
});

// handle change in Remember Me checkbox
rememberMeBox.addEventListener("change", function () {
  if (!this.checked) {
    // remove all cookies
    inputs.forEach(function (input) {
      setCookie(input.cookieName, "", -1);
    });
  } else {
    // re-save current values
    inputs.forEach(function (input) {
      var el = document.getElementById(input.id);
      if (el) {
        setCookie(input.cookieName, el.value, 30);
      }
    });
  }
});

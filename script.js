let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signinBtn.classList.remove("disabled");
    signupBtn.classList.add("disabled");
} 

signupBtn.onclick = function() {
    nameField.style.maxHeight = "50px";
    title.innerHTML = "Sign Up";
    signinBtn.classList.add("disabled");
    signupBtn.classList.remove("disabled");
} 

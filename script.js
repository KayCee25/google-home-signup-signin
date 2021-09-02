let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirm = document.getElementById("confirm")
let button = document.getElementById("submit")


function handleNext () {
    if(firstName.value === ""){
        alert("firstname is required")
    }else{
        alert("Hello " + firstName.value + " Page will be available soon!")
        firstName.value = ""
        lastName.value =""
        email.value = ""
        password.value = ""
        confirm.value = ""
    }
}



button.addEventListener("click", handleNext)
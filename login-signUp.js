// This function for login form validation

const lerror = document.querySelector("#lerror");
const lusername = document.querySelector("#lusername");
const lpassword = document.querySelector("#lpassword");
const form1 = document.querySelector("#loginForm");

form1.addEventListener("submit", function (e) {
    let massages = [];
    if (lusername.value === '') {
        massages.push("Username is required");
    }

    if (lpassword.value.length < 8 || lpassword.value.length > 20) {
        massages.push("Password's length should be between 8 and 20");
    }

    if (massages.length > 0) {
        e.preventDefault();
        lerror.innerHTML = massages.join(" and ");
    }
});

const serror = document.querySelector("#serror");
const susername = document.querySelector("#susername");
const spassword = document.querySelector("#spassword");
const repassword = document.querySelector("#repassword");
const form2 = document.querySelector("#signForm");

form2.addEventListener("submit", function (e) {
    let massages = [];
    if (susername.value === '') {
        massages.push("Username is required");
    }

    if (repassword.value.length < 8 || repassword.value.length > 20) {
        massages.push("Password's length should be between 8 and 20");
    }

    if (spassword.value !== repassword.value) {
        massages.push("You should enter the same password again")
    }

    if (massages.length > 0) {
        e.preventDefault();
        serror.innerHTML = massages.join(" and ");
    }
});

const change = document.querySelector("#switch")

change.onclick = function () {
    form1.classList.toggle("dis")
    form2.classList.toggle("dis")
    if (change.innerHTML === "login") {
        change.innerHTML = "Sign up"
    } else {
        change.innerHTML = "login"
    }
}
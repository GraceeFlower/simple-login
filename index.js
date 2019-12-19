var objectUser = document.getElementById("username");
var objectPassword = document.getElementById("password");
var loginForm = document.getElementById("login")

loginForm.addEventListener("submit", checkAccount, false);
function checkAccount() {
  if (objectUser.value === "123" && objectPassword.value === "123") {
    alert("Welcome! You are the apple of my eyes.");
  } else if (objectPassword.value !== "123" && objectUser.value === "123") {
    alert("Please enter the right password!");
  } else {
    alert("Please enter the right name!");
  }
}
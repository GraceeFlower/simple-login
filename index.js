var objectSubmit = document.getElementsByTagName("button")[0];
var objectUser = document.getElementById("username");
var objectPassword = document.getElementById("password");

objectSubmit.addEventListener("click", checkAccount, false);
function checkAccount() {
  if (objectUser.value === "123" && objectPassword.value === "123") {
    alert("Welcome! You are the apple of my eyes.");
    objectSubmit.style.backgroundColor = "#ddd";
  } else if (objectPassword.value !== "123" && objectUser.value === "123") {
    alert("Please enter the right password!");
    objectPassword.value = null;
  } else {
    alert("Please enter the right name!");
    objectPassword.value = null;
    objectUser.value = null;
  }
}
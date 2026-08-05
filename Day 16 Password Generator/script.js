const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
const passwordLength = 8;

function generatePassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  document.getElementById("password").value = password;
}

function togglePassword() {
  const passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

function copyPassword() {
  const password= document.getElementById("password").value;
  if(password === "") {
    alert("Please generate a password first!");
  }

  navigator.clipboard.writeText(password);

  document.getElementById("message").innerText = "✅Password Copied!";
  setTimeout(function(){
    document.getElementById("message").innerText = "";
  }, 2000);
}

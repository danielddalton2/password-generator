// Characters for the password

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
var lower = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1", "2", "3", "4","5","6","7","8","9"];
var special = ["!", "@", "#", "$","%","&","'","(",")","*","+","=",",","-",".","/",":",";","<",">","?","[","]","^","_","{","}","|","`","~"];

// Functions to generate the password
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordOptions = [];
  var finalPassword = [];
  var length = prompt("How long do you want your password to be?")
  console.log(length)
  if (length < 8 || length > 128) {
    alert("Please choose a password between 8-128 characters.")
    return;
  }
  var hasLower = confirm("Do you want lower case letters in your password?")
  var hasUpper = confirm("Do you want upper case letters in your password?")
  var hasNumbers = confirm("Do you want numbers in your password?")
  var hasSpecial = confirm("Do you want special characters in your password?")
  if (hasLower === true) {
    passwordOptions = passwordOptions.concat(lower);
    finalPassword.push(lower[Math.floor(Math.random() * lower.length)]);
    length--;
  }
  if (hasUpper === true) {
    passwordOptions = passwordOptions.concat(upper);
    finalPassword.push(upper[Math.floor(Math.random() * upper.length)]);
    length--;
  }
  if (hasNumbers === true) {
    passwordOptions = passwordOptions.concat(number);
    finalPassword.push(number[Math.floor(Math.random() * number.length)]);
    length--;
  }
  if (hasSpecial === true) {
    passwordOptions = passwordOptions.concat(special);
    finalPassword.push(special[Math.floor(Math.random() * special.length)]);
    length--;
  }
  console.log(passwordOptions)
  for (let index = 0; index < length; index++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
  }
  console.log(finalPassword);
  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

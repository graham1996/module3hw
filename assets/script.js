// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");



// Write password to the #password input
function writePassword() {
  var characterNum = prompt('Please select password criteria. Password must be between 8 and 128 characters.');
  while (((characterNum < 8) && (characterNum)) || (characterNum > 128)) {
    if (characterNum < 8) alert('Password must be at least 8 characters!')
    if (characterNum > 128) alert('Password cannot be longer than 128 characters!')
    return characterNum;
  }
  var password = "";
  // sets number and type of characters
  var charOptions = [];
  var charLower = confirm('Would you like your password to contain lowercase characters?');
  var charUpper = confirm('Would you like your password to contain uppercase characters?');
  var charNumber = confirm('Would you like your password to contain numbers?');
  var charSpecial = confirm('Would you like your password to contain special characters?');

  if (charLower === true) {
    charOptions.push('abcdefghijklmnopqrstuvwxyz')
  }
  if (charUpper === true) {
    charOptions.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  }
  if (charNumber === true) {
    charOptions.push('0123456789')
  }
  if (charSpecial === true) {
    charOptions.push('!@#$%^&*()')
  }

  // uses variables to create a random string
  for (var i = 0; i < characterNum; i++) {
    var randomNumber = Math.floor(Math.random() * charOptions.length);
    var newPassword = Math.floor(Math.random() * (charOptions[randomNumber].length));
    password = password + charOptions[randomNumber][newPassword]
  }
  console.log(password);
  // grabs the generated string and adds it to the text box
  document.getElementById("password").value = password;

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

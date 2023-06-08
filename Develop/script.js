// Assignment Code
// variable called generateBTN - look in docuement and select CSS ID called generate)
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var passwordCharacters = "";
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var lowerCaseCharacters = window.confirm("Include lowercase letters?");
  if (lowerCaseCharacters ) {
    passwordCharacters += lowerCaseCharacters;
  };
  var upperCasedCharacters = window.confirm("Include UPPERCASE LETTERS?");
  if (upperCasedCharacters ) {
    passwordCharacters += upperCasedCharacters;
  };
  var numericCharacters = window.confirm("Include numbers?");
  if (numericCharacters ) {
    passwordCharacters += numericCharacters;
  };
  var specialCharacters = window.confirm("Include special characters?");
  if (specialCharacters ) {
    passwordCharacters += specialCharacters;
    console.log("made it to special characters")
  };
  var passwordLength = window.prompt("Choose a password length between 8 - 126 characters");
  if (passwordLength > 7 && passwordLength < 129) {
    console.log(passwordLength)
  } else {
    window.alert("Sorry you need to choose between 8-126 characters.Please press the Generate Passwword button to begin again");
  }
  var password = "";
  console.log("made it to password gen")
  for (let i = 0; i < passwordLength; i++) {
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



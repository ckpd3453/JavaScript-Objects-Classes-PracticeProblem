let prompt = require("prompt-sync")();

//Taking User Input and creating regEx Pattern
let pincodeRegex = new RegExp("^[0-9]{6}$");
let pincode = parseInt(prompt("Enter the PinCode = "));

//Validate user input with RegEx pattern so that no alphabet should comes first
if (pincodeRegex.test(pincode)) {
    console.log("Enterd Successfully");
} else {
    console.log("please enter Valid pincode")
}
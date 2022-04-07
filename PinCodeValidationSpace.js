let prompt = require("prompt-sync")();

//Taking User Input and creating regEx Pattern
let pincodeRegex = new RegExp("^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$");
let pincode = parseInt(prompt("Enter the PinCode = "));

//Validate user input with RegEx pattern so that it accepts white space
if (pincodeRegex.test(pincode)) {
    console.log("Enterd Successfully");
} else {
    console.log("please enter Valid pincode")
}
let prompt = require("prompt-sync")();

let emailRegex = new RegExp("^abc[._+-]?[a-zA-Z]*@bridgelabz[.]co[.]*[a-z]*$");
let userInput = prompt("Enter Your email = ");

if (emailRegex.test(userInput)) {
    console.log("you entered valid email id ");
} else {
    console.log("you entered  wrong email id ");
}
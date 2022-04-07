let emialRegex = new RegExp("^abc[-.+]*[0-9]*@[a-z]*[.a-z][.a-z]*")
let userInput = prompt("enter email id here = ");
if (emialRegex.test(userInput)) {
    console.log("you entered valid email id ");
} else {
    console.log("you entered  wrong email id ");
}
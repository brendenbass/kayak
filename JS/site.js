//get the user input
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let originalString = document.getElementById("userInput").value.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    let userString = document.getElementById("userInput").value.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    let revString = reverseString(userString);

    checkValues(revString, originalString);
}

function reverseString(userString){

    let revString = [];

    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    return revString;
}
//check for palindrome
function checkValues(revString, originalString){

    //check to see if first user input string is equal to reversed string (should be a truthy statement); if yes, good message; if falsy, bad message
    if (revString === originalString) {
        document.getElementById("alertHeading").innerHTML = `Well done! You entered a palindrome!`;
        document.getElementById("msg").innerHTML = `Your message reversed is: ${revString}`;
        document.getElementById("alert").classList.remove("invisible");
    } else {
        document.getElementById("alertHeading").innerHTML = `Sorry!`;
        document.getElementById("msg").innerHTML = `That's not a palindrome.`;
        document.getElementById("alert").classList.remove("invisible");
    }
}
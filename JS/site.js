//get the user input
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userInput").value;

    let revString = reverseString(userString);

    displayString(revString);
    removeAttributes(userString);
}

function removeAttributes(userString){

    //remove spaces and non-letters
    userString.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

    return userString;
}


//check for palindrome
function checkValue(value){
    
    //create an array with user input inside

    //reverse the array

    //check to see if first user input string is equal to reversed string (should be a truthy statement); if yes, good message; if falsy, bad message

}
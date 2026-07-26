/* ------ RANDOM CODES ------ */

// Function to generate combination of characters
function generateCode() {

    // Create variables to store generated codes
    var code = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    // Generate character multiple times using a loop
    for (var i = 1; i <= 8; i++) {

        var character = Math.floor(Math.random() * str.length);

        code += str.charAt(character);

    }

    // Return the final accumulated string
    return code;
}

// Display generated code
document.getElementById("codes").innerHTML = generateCode();

// Disable button
function disableButton() {

    document.getElementById("submit").disabled = true;

}

// Activate function
disableButton();
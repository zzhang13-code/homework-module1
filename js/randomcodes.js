/* ------ RANDOM CODES ------ */

var code = "";
var getCode = "";
var btnvalue;

var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

// Function to generate combination of characters
function generateCode() {

    code = "";

    for (var i = 1; i <= 8; i++) {

        var character = Math.floor(Math.random() * str.length);

        code += str.charAt(character);
    }

    return code;
}

// Display generated code
document.getElementById("codes").innerHTML = generateCode();

// Determine when to enable or disable button
function disableButton(btnvalue) {

    document.getElementById("submit").disabled = btnvalue;

    if (btnvalue == true) {

        document.getElementById("submit").style.backgroundColor =
            "rgba(73,119,209,0.3)";

        document.getElementById("submit").style.color =
            "rgba(255,255,255,0.5)";

    } else {

        document.getElementById("submit").style.backgroundColor =
            "rgba(73,119,209,1)";

        document.getElementById("submit").style.color =
            "rgba(255,255,255,1)";
    }
}

// Listen to user input
var codebox = document.getElementById("codeentered");

codebox.addEventListener("input", evaluateCode);

// Evaluate entered code
function evaluateCode() {

    getCode = document.getElementById("codeentered").value;

    var charset1 = getCode.trim();
    var charset2 = code.trim();

    if (
        charset1.length == charset2.length &&
        charset1 == charset2
    ) {
        disableButton(false);
    }
}
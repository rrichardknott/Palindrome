
$("#submitButton").click(function () {  
    if ($("#phrase").val().length == 0) {
        alert("Invalid entry");
        $("#phrase").focus();
        return;
    }

    let lettersOnly = /[\W0-9_]/g;
    let cleanPhrase = $("#phrase").val().toLowerCase().replace(lettersOnly, "");
        
    let reversedPhrase = cleanPhrase.split("").reverse().join("");
    $("#resultText").val(reversedPhrase);

    if (cleanPhrase === reversedPhrase) {
        $("#title").text("palindrome!");
    } else {
        $("#title").text("!palindrome");
    }
});

$("#clearButton").on("click", function () {
    $("#phrase").val("").focus();
    $("#resultText").val("");
    $("#title").text("Palindrome");
});



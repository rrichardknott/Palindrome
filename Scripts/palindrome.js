
$("#submitButton").click(function () {
             
    let removeNonAlphasAndNumerics = /[\W_]/g;
    let phrase = $("#phrase").val();

    let cleanPhrase = phrase.toLowerCase().replace(removeNonAlphasAndNumerics, "");

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



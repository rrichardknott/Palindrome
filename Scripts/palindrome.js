$("#errorAlert").hide();
$("#errorAlertButton").hide();

$("#submitButton").click(function () {  
    if ($("#phrase").val().length == 0) {
        $("#errorAlert").show(1000);
        $("#errorAlertButton").show(1000);
        $("#submitButton").hide();
        $("#clearButton").hide();
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

$("#clearButton"), $("#errorAlertButton").on("click", function () {
    $("#phrase").val("").focus();
    $("#resultText").val("");
    $("#title").text("Palindrome");    
    $("#errorAlertButton").hide();
    $("#errorAlert").hide();
    $("#clearButton").show();
    $("#submitButton").show();
});



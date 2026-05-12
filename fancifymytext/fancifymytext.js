function biggerText() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancifyText() {
    var textArea = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    text = text.toUpperCase();
    var parts = text.split(".");

    for (var i = 0; i < parts.length; i++) {
        parts[i] = parts[i].trim();
        if (parts[i].length > 0) {
            parts[i] = parts[i] + "-Moo";
        }
    }

    text = parts.join(". ");
    if (!text.endsWith(".")) {
        text = text + ".";
    }
    textArea.value = text;
}
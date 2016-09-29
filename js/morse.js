function alphaToMorse(){

    var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
                ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
                "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..",
                ".----", "..---", "...--", "....-", ".....", "-....", "--...",
                "---..", "----.", "-----", "/", ".-.-.-", "--..--", "..--..",
                "-....-"];
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ",
                ".", ",", "?", "-"];

    var display = document.getElementById('result');

    function processInput(){

        var input = document.getElementById("user-input");
        var length = input.value.length;
        var output = "";

        for (var i = 0; i < length; i++) {

            output += morse[alpha.indexOf(getLowerInputChar(input.value, i))] + " ";
        }

        display.innerHTML = output;
    };

    function getLowerInputChar(input, i){
        return input.charAt(i).toLowerCase();
    };

    processInput();

};

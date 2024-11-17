let theCanvas;

let guesses = 0;
const message = "Guess the letter from a(lower) to z(higher)";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let today = new Date();
let letterToGuess = "";
let higherOrLower = "";
let letterGuessed = [];
let gameOver = false;

function intiGame() {
    let letterIndex = Math.floor(Math.random() * letters.length);
    letterToGuess = letters[letterIndex];
    guesses = 0;
    letterGuessed = [];
    gameOver = false;
    window.addEventListener("keydown", eventKeyPresed, true);
    drawScreen()
}

function eventKeyPresed(e) { // Now the event object (e) is correctly passed
    if (!gameOver) {
        let letterPressed = String.fromCharCode(e.keyCode).toLowerCase(); // Convert to lowercase
        guesses++;
        letterGuessed.push(letterPressed); // Store the guessed letter

        if (letterPressed === letterToGuess) {
            gameOver = true; // Correct guess
            higherOrLower = ""; // No need for this message once game is over
        } else {
            let guessIndex = letters.indexOf(letterPressed);
            let letterIndex = letters.indexOf(letterToGuess);

            if (guessIndex === -1) {
                higherOrLower = "Not a valid letter!";
            } else if (guessIndex > letterIndex) {
                higherOrLower = "Lower";
            } else {
                higherOrLower = "Higher";
            }
        }
        drawScreen();
    }
}

function drawScreen() {
    theCanvas = document.getElementById("canvasOne");
    if (!theCanvas || !theCanvas.getContext) {
        return;
    }

    let context = theCanvas.getContext("2d");

    // Clear canvas
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);

    // Background color
    context.fillStyle = "#ffffaa";
    context.fillRect(0, 0, 500, 300);

    context.strokeStyle = "#000000";
    context.strokeRect(5, 5, 490, 290);

    context.textBaseline = "top";
    context.fillStyle = "#000000";
    context.font = "10px Sans-Serif";
    context.fillText(today.toLocaleDateString(), 150, 10); // Display formatted date

    // Game Message
    context.fillStyle = "#FF0000";
    context.font = "14px Sans-Serif";
    context.fillText(message, 125, 30);
    context.fillStyle = "#109910";
    context.font = "16px Sans-Serif";
    context.fillText('Guesses: ' + guesses, 215, 50);

    // High or Lower message
    context.fillStyle = "#00000";
    context.fillText("High or Lower: " + higherOrLower, 150, 125);

    // Letters guessed so far
    context.fillStyle = "#FF0000";
    context.font = "16px Sans-Serif";
    context.fillText("Letters Guessed: " + letterGuessed.toString(), 10, 260);

    // If game is over, show winning message
    if (gameOver) {
        context.fillStyle = "#FF0000";
        context.font = "40px Sans-Serif";
        context.fillText("You Got it!", 150, 180);
    }
}

// Start the game
intiGame();

var numSquares = 6;
var colors = [];
var pickedColor;

var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // modeButtons toggles
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

    for (var i = 0; i < squares.length; i++) {

        // add event listeners
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
            }
            else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }

    reset();
}

function reset() {
    //generate all new colors
    colors = generateColors(numSquares);
    //pick new correct color from array
    pickedColor = pickColor();
    //change color display
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors!";
    // change the colors of all squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    //resetting h1 color too after resetting
    h1.style.background = "steelblue";
}
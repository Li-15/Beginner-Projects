const display = document.getElementById("display")

function appendToDisplay(value) {
    display.value += value
}

function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch (error) {
        display.value = "error"
    }
}

function clearDisplay() {
    display.value = ""
}

let input;
let percent;
let select;
let result;
let wholePer = 100;

function changePH() {
    select = parseFloat(document.getElementById("modesSelect").value);
    if (select === 1) {
        document.getElementById("input").placeholder = "Original amount..."
        document.getElementById("percent").placeholder = "Percent..."
    }
    else if (select === 2) {
        document.getElementById("input").placeholder = "part..."
        document.getElementById("percent").placeholder = "Percent..."
    }
    else if (select === 3) {
        document.getElementById("input").placeholder = "Original Amount..."
        document.getElementById("percent").placeholder = "Part"
    }
    else {
        document.getElementById("input").placeholder = ""
        document.getElementById("percent").placeholder = ""
    }
}

function percetnCal() {
    select = parseFloat(document.getElementById("modesSelect").value);
    input = parseFloat(document.getElementById("input").value);
    percent = parseFloat(document.getElementById("percent").value);
    result = document.getElementById("result")


    if (input && percent != "" && select != "") {
        if (select == 1) {
            result.innerText = `The part is: ${getPart(input, percent)}`
        }
        else if (select === 2) {
            result.innerText = `The whole is: ${getWhole(input, percent)}`
        }
        else if (select === 3) {
            result.innerText = `${getPercent(input, percent)}%`
        }

    }
    else {
        result.innerText = "Please complete the form or choose a mode..."
    }
}
function getPart(input, percent) {
    return input * percent / wholePer;
}
function getWhole(part, percent) {
    return part * wholePer / percent;
}
function getPercent(input, part) {
    return part * wholePer / input;
}
function clear() {
    const tf = confirm("do you want to clear all data?");
    if (tf === true) {
        document.getElementById("input").value = "";
        document.getElementById("percent").value = "";
        document.getElementById("result").innerText = "";
    }
    else {
        return
    }
}
document.getElementById("clear").addEventListener("click", clear)
document.getElementById("use").addEventListener("click", percetnCal)
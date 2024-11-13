const body = document.getElementsByTagName("body")[0];
const bluebtn = document.getElementById("blue");
const orangebtn = document.getElementById("orange");
const redbtn = document.getElementById("red");
const greenbtn = document.getElementById("green");
const randombtn = document.getElementById("random");
const title = document.getElementById("title")
const colorText = document.getElementById("colorText")

function blue() {
    body.style.backgroundColor = "blue";
};
function red() {
    body.style.backgroundColor = "red";
};
function green() {
    body.style.backgroundColor = "green";
};
function orange() {
    body.style.backgroundColor = "orange";
};
function randomColor() {
    const red = Math.random() * 255;
    const blue = Math.random() * 255;
    const green = Math.random() * 255;

    const red50 = red - 50;
    const blue50 = blue - 50;
    const green50 = green - 50;
    title.style.color = `rgb(${red50}, ${green50}, ${blue50})`

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    colorText.innerHTML = "Red: " + Math.round(red) + ", " + "Blue: " + Math.round(blue) + ", " + "Green: " + Math.round(green);


}



bluebtn.addEventListener("click", blue);
orangebtn.addEventListener("click", orange);
greenbtn.addEventListener("click", green);
redbtn.addEventListener("click", red);
randombtn.addEventListener("click", randomColor)

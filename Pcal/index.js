let one;
let two;
function cal() {
    one = parseFloat(document.getElementById("oneSide").value)
    two = parseFloat(document.getElementById("twoSide").value)
    document.getElementById("result").innerText = `The estimated length of the third side is: ${Math.round(Math.sqrt((one * one + two * two)))}`
}
document.getElementById("use").addEventListener("click", cal)
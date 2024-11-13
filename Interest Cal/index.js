let oAmnt;
let time;
let profit;
let select;

function main() {
    select = parseFloat(document.getElementById("mode").value)
    oAmnt = parseFloat(document.getElementById("oAmnt").value);
    time = parseFloat(document.getElementById("time").value);
    profit = parseFloat(document.getElementById("profit").value);

    if (isNaN(oAmnt) || isNaN(time) || isNaN(profit)) {
        document.getElementById("result").innerText = "Please fill out the form correctly..."
        return
    }

    if (select === 0) {
        document.getElementById("result").innerText = "Please choose a mode..."
        return
    }
    if (select === 1) {
        let result = oAmnt * time * (profit / 100)
        document.getElementById("result").innerText = "The simple profit is: " + "$" + result.toFixed(2)
    }
    else {
        let compoundAmt = oAmnt * Math.pow((1 + profit / 100), time)
        document.getElementById("result").innerText = `The total is ${compoundAmt.toFixed(2)}
                The profit is ${(compoundAmt - oAmnt).toFixed(2)}
                `;
    }
}

document.getElementById("use").addEventListener("click", main)
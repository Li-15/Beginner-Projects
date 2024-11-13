let input;
let replaceWhat;
let replaceWith;
const btn1 = document.getElementById("btn1");
const btnDelete = document.getElementById("delete");

function main() {
    input = document.getElementById("input").innerText;
    replaceWhat = document.getElementById("replaceWhat").value;
    replaceWith = document.getElementById("replaceWith").value;

    const inputUse = input.split(" ");

    const updatedInput = inputUse.map(part =>
        part === replaceWhat ? replaceWith : part
    );

    document.getElementById("outcome").innerHTML = updatedInput.join(" ");
}
function clearInputs() {
    document.getElementById("input").innerText = '';
    document.getElementById("replaceWhat").value = '';
    document.getElementById("replaceWith").value = '';
    document.getElementById("outcome").innerHTML = '';
}


btn1.addEventListener("click", main);
btnDelete.addEventListener("click", clearInputs);

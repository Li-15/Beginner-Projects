let snInput = document.getElementById("s-nInput");
let nsInput = document.getElementById("n-sInput");
const snBtn = document.getElementById("s-nBtn");
const nsBtn = document.getElementById("n-sBtn");
let snchab = document.getElementById("results-n");
let nschab = document.getElementById("resultn-s");

let copyBtn = document.getElementById("copy");

let translated = null;

function snTranslate() {
    if (snInput.value.trim() !== "") {
        translated = changeValuesn(snInput.value);
        snchab.innerText = translated;
        copyBtn.style.display = "block";
    }
    else {
        snchab.innerText = "Please fill out the form"
        return
    }
}

function changeValuesn(input) {
    const translationMap = {
        'a': '9-', 'b': '63-',
        'c': '2-', 'd': '11-',
        'e': '6-', 'f': '43-',
        'g': '8-', 'h': '52-',
        'i': '99-', 'j': '22-',
        'k': '58-', 'l': '45-',
        'm': '17-', 'n': '15-',
        'o': '24-', 'p': '37-',
        'q': '36-', 'r': '31-',
        's': '32-', 't': '49-',
        'u': '56-', 'v': '83-',
        'w': '20-', 'x': '30-',
        'y': '90-', 'z': '98-',
        ' ': '0-' // 0 means space    
    };
    return input.toLowerCase().split('').map(char => translationMap[char] || '').join("")
}

function nsTranslate() {
    if (nsInput.value.trim() !== "") {
        const translated = nsChange(nsInput.value)
        nschab.innerText = translated
    }
    else {
        nschab.innerText = "Please fill out the form"
        return
    }
}
function nsChange(input) {
    62
    const numberToCharMap = {
        '9': 'a', '63': 'b', '2': 'c', '11': 'd',
        '6': 'e', '43': 'f', '8': 'g', '52': 'h', '99': 'i', '22': 'j',
        '58': 'k', '45': 'l', '17': 'm', '15': 'n', '24': 'o', '37': 'p',
        '36': 'q', '31': 'r', '32': 's', '49': 't', '56': 'u', '83': 'v',
        '20': 'w', '30': 'x', '90': 'y', '98': 'z', '0': ' ' // 0- represents space
    };
    return input.split("-").map(num => numberToCharMap[num] || "").join("");
}

function clearAll() {
    copyBtn.style.display = "none";
    nschab.innerText = "";
    snchab.innerText = "";
    nsInput.value = "";
    snInput.value = "";
}

function copy() {
    navigator.clipboard.writeText(translated)
}

document.getElementById("i4").addEventListener("click", clearAll)
snBtn.addEventListener("click", snTranslate)
nsBtn.addEventListener("click", nsTranslate)
copyBtn.addEventListener("click", copy)
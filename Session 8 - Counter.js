let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.counter-minus');
let counterPlus = document.querySelector('.counter-plus');

let count = 0;

function updateDisplay() {
    counterDisplay.innerHTML = count;
};
updateDisplay();

counterPlus.addEventListener("click", () => {
    count++;
    updateDisplay();
});

counterMinus.addEventListener("click", () => {
    count--;
    updateDisplay();
});

// /////////////////////////



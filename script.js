const buttonAdd = document.querySelector('.btn-add');
const buttonLower = document.querySelector('.btn-lower');
const buttonReset = document.querySelector('.btn-reset');
const displayElement = document.getElementById('input');

let count = 0;

function updateDisplay() {
    displayElement.innerHTML = count;
};

updateDisplay();

buttonAdd.addEventListener('click', () => {
    count++;
    updateDisplay();
});

buttonLower.addEventListener('click', () => {
    count--;
    updateDisplay();
});

buttonReset.addEventListener('click', () => {
    count = 0;
    displayElement.innerHTML = count;
});
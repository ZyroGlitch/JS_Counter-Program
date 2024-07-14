const number = document.getElementById('numberOutput');
const increase = document.getElementById('increaseBtn');
const reset = document.getElementById('resetBtn');
const decrease = document.getElementById('decreaseBtn');

let counter = 0;

increase.onclick = function () {
    counter++;
    number.textContent = counter;
}

reset.onclick = function () {
    counter = 0;
    number.textContent = counter;
}

decrease.onclick = function () {
    counter--;
    number.textContent = counter;
}
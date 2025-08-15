const counterDom = document.getElementById('counter');
const minusBtn = document.getElementById('minus');
const pluseBtn = document.getElementById('pluse');

let counter = 0;

const updateCounter = (value) => {
    counter = counter + value;
    counterDom.innerText = counter;
    if (counter >= 10) {
        pluseBtn.setAttribute('disabled', true);
    } else {
        pluseBtn.removeAttribute('disabled', false);
    }


    // minus

    counterDom.innerText = counter;

    if (counter <= 0) {
        minusBtn.setAttribute('disabled', true);
    } else {
        minusBtn.removeAttribute('disabled', false);
    }


};

pluseBtn.addEventListener('click', () => {
   updateCounter(1);
});


minusBtn.addEventListener('click', () => {
updateCounter(-1);
});
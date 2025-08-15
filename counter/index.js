let counterDom = document.getElementById('counter');

const pluse = document.getElementById('pluse');
const minus = document.getElementById('minus');

let counter = 0;


const updateCounter = (value) => {
    counter = counter + value;
    counterDom.innerHTML = counter;
    if (counter >= 10) {
        pluse.setAttribute('disabled', true);
    }
    else {
        pluse.removeAttribute('disabled', false);
    }

    // minus

    counterDom.innerHTML = counter;
    if (counter <= 0) {
        minus.setAttribute('disabled', true);
    } else {
        minus.removeAttribute('disabled', false);
    }
};

pluse.addEventListener('click', () => {
    updateCounter(1);


});

minus.addEventListener('click', () => {
    updateCounter(-1);

});
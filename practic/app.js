// dom seclection
// evenlisener add to btn
// logic add and attribute

const counterDom = document.getElementById('counter');
const pluseBtn = document.getElementById('pluseBtn');
const minusBtn = document.getElementById('minusBtn');

let counter = 0;


const counterUpdate = (update) => {
      counter = counter + update;
    counterDom.innerHTML = counter;

    if (counter >= 10) {
        pluseBtn.setAttribute('disabled', true);
    } else {
        pluseBtn.removeAttribute('disabled', false);
        
    }

    //  minis code

    counterDom.innerHTML = counter;
    if (counter <= 0) {
        minusBtn.setAttribute('disabled',true);
    } else {
        minusBtn.removeAttribute('disabled', false);
    }

}

// addEventListener
pluseBtn.addEventListener('click', () => {
    counterUpdate(1);


});

minusBtn.addEventListener('click', () => {
    counterUpdate(-1);
});

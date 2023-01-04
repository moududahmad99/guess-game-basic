let wrapperOneInput = document.querySelector('.wrapperOneInput');
let wrapperOneButton = document.querySelector('.wrapperOneButton');
let wrapperOne = document.querySelector('.wrapperOne');
let playerOneValue;

let wrapperTwoInput = document.querySelector('.wrapperTwoInput');
let wrapperTwoButton = document.querySelector('.wrapperTwoButton');
let wrapperTwo = document.querySelector('.wrapperTwo');

let error = document.querySelector('.error');
let success = document.querySelector('.success');

let chance = document.querySelector('.chance');
let count = 4;

wrapperOneButton.addEventListener('click', function () {
    if (wrapperOneInput.value) {
        error.innerHTML = '';
        if (wrapperOneInput.value - 99) {
            if (wrapperOneInput.value >= 0 && wrapperOneInput.value <= 9) {
                playerOneValue = wrapperOneInput.value;
                wrapperOne.style.display = 'none';
                wrapperTwo.style.display = 'block';
            } else {
                error.innerHTML = 'Enter a number between 0 - 9';
            }
        } else {
            error.innerHTML = 'Enter a Number!';
        }
    } else {
        error.innerHTML = 'Please Enter a Value!';
    }
});

wrapperTwoButton.addEventListener('click', function () {
    if (wrapperTwoInput.value) {
        error.innerHTML = '';
        if (wrapperTwoInput.value - 99) {
            if (wrapperTwoInput.value >= 0 && wrapperTwoInput.value <= 9) {
                count--;
                if (count != 0) {
                    if (playerOneValue == wrapperTwoInput.value) {
                        success.innerHTML = "Player Two Win";
                        chance.innerHTML = 'Chance ' + 0;
                    } else {
                        chance.innerHTML = 'Chance ' + count;
                    }
                } else {
                    success.innerHTML = "Player One Win!"   
                    chance.innerHTML = 'Chance ' + count;
                }
            } else {
                error.innerHTML = 'Enter a number between 0 - 9'
            }
        } else {
            error.innerHTML = 'Enter a Number!'
        }
    } else {
        error.innerHTML = 'Enter a Value!';
    }
});

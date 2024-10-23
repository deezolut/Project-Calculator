const log = console.log;
const table = console.table;

function addition(array) {
    return array.reduce((total, num) => {
        total += num;
        return total;
    }, 0);
};

function subtraction(array) {
    return array.reduce((total, num) => {
        total -= num;
        return total;
    });
};

function multiply(array) {
    return array.reduce((total, num) => {
        total *= num;
        return total;
    });
};

function divide(array) {
    return array.reduce((total, num) => {
        total /= num;
        return total;
    });
};


let num1
let operator
let num2

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': 
            return addition([num1, num2]);

        case '-':
            return subtraction([num1, num2]);

        case '*':
            return multiply([num1, num2]);

        case '/':
            return divide([num1, num2]);

    };
};


const buttons = document.querySelector('#container-of-buttons');

for (let i = 1; i < 20; i++) {
    let button = document.createElement('div');
    button.setAttribute('id', `btn${i}`);
    button.classList.add('button');
    buttons.appendChild(button);
}


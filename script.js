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

function remainder(array) {
    return array.reduce((total, num) => {
        total %= num;
        return total;
    });
}

let userNum1 
let userOperator 
let userNum2

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
        case '%':
            return remainder([num1, num2]);

    };
};


const buttons = document.querySelector('#container-of-buttons');

for (let i = 1; i < 20; i++) {
    let button = document.createElement('div');
    button.setAttribute('id', `btn${i}`);
    button.classList.add('button');
    buttons.appendChild(button);
};

for (let i = 1; i < 20; i++) {
    let button = document.querySelector(`#btn${i}`);

    switch (i) {

        case 1:
            button.textContent = 'AC';
            button.style.color = 'white'
            break;
        case 2:
            button.textContent = 'DEL';
            button.style.color = 'white'
            break;
        case 3:
            button.textContent = '%';
            button.style.color = 'white'
            break;
        case 4:
            button.textContent = '+';
            button.style.color = 'white'
            break;
        case 5:
            button.textContent = '1';
            button.style.color = 'white'
            break;
        case 6:
            button.textContent = '2';
            button.style.color = 'white'
            break;
        case 7:
            button.textContent = '3';
            button.style.color = 'white'
            break;
        case 8:
            button.textContent = '-';
            button.style.color = 'white'
            break;
        case 9:
            button.textContent = '4';
            button.style.color = 'white'
            break;
        case 10:
            button.textContent = '5';
            button.style.color = 'white'
            break;
        case 11:
            button.textContent = '6';
            button.style.color = 'white'
            break;
        case 12:
            button.textContent = '/';
            button.style.color = 'white'
            break;
        case 13:
            button.textContent = '7';
            button.style.color = 'white'
            break;
        case 14:
            button.textContent = '8';
            button.style.color = 'white'
            break;
        case 15:
            button.textContent = '9';
            button.style.color = 'white'
            break;
        case 16:
            button.textContent = '*';
            button.style.color = 'white'
            break;
        case 17:
            button.textContent = '0';
            button.style.color = 'white'
            break;
        case 18:
            button.textContent = '.';
            button.style.color = 'white'
            break;
        case 19:
            button.textContent = '=';
            button.style.color = 'white'
            break;
    }
};

const getButtonClicked = document.querySelectorAll('.button');
const display = document.querySelector('#display')

getButtonClicked.forEach(button => {
    button.addEventListener('click', e => {
        
        if (display.textContent == '0') display.textContent = '';    
        display.textContent += e.target.textContent;
        

        let displayValue
        switch (e.target.textContent) {

            case 'AC':
                displayValue = 0;
                display.textContent = '0';
                break;

            case 'DEL':
                let arrayForDelete = display.textContent.split('');
                arrayForDelete.splice(-4, 4); // deletes last digit typed and prevents 'DEL' from being typed
                display.textContent = arrayForDelete.join('');
                break;

            case '=':
                let arrayForEqual = display.textContent.split('+');
                userNum2 = parseFloat(arrayForEqual.pop());
                displayValue = operate(userOperator, userNum1, userNum2);

                userNum1 = 0;
                userNum2 = 0;
                display.textContent = displayValue;
                break;

            case '+':
                if (userOperator != undefined) {
                    let arrayForAddition = display.textContent.split('+');
                    userNum2 = parseFloat(arrayForAddition.splice(-2, 1));
                    displayValue = operate(userOperator, userNum1, userNum2);
                    display.textContent = displayValue;
                }

                if (displayValue != undefined) {
                    display.textContent += e.target.textContent
                }

                userNum1 = parseFloat(display.textContent);
                userOperator = '+';
                break;

            // case '%':
            //     userNum1 = parseFloat(display.textContent);
            //     userOperator = '%';
            //     break;
        }
        log(displayValue)
        log(userOperator)
    })
})
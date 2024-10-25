const log = console.log;
const table = console.table;

function addition(array) {
    return array.reduce((total, num) => {
        // to avoid the js float errors like 0.2 + 0.1 = 0.300000004
        total = (total * 10 + num * 10) / 10; 
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
};

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
const display = document.querySelector('#display');


getButtonClicked.forEach(button => {
    button.addEventListener('click', clickButton);
});

function clickButton(e) {
    // does not allow more than 15 digits
    if (display.textContent.at(14)
        && !isNaN(parseFloat(e.target.textContent))
        && !isNaN(display.textContent.at(-1))) return;

    if (display.textContent == '0' && e.target.textContent != '.') {
        display.textContent = '';
    };    
    display.textContent += e.target.textContent;
        

    let displayValue
    
    switch (e.target.textContent) {

        case 'AC':
            displayValue = undefined;
            display.textContent = '0';
            userOperator = undefined;
            break;

        case 'DEL':
            let arrayForDelete = display.textContent.split('');
            let arrayForDelete2 = display.textContent.split('');
            if (isNaN(arrayForDelete2.splice(-4, 4)[0])) userOperator = undefined;
            arrayForDelete.splice(-4, 4); // deletes last digit typed and prevents 'DEL' from being typed
            display.textContent = arrayForDelete.join('');
            break;

        case '=':
            
        

            if (userOperator == undefined && displayValue == undefined) {
                let arrayForEqual = display.textContent.split('');
                arrayForEqual.splice(-1, 1);
                display.textContent = arrayForEqual.join('');
                displayValue = display.textContent;
                return;
            }
        
            
            if (userOperator != undefined) {
                let arrayForNum2 = display.textContent.split('');
                if (arrayForNum2.includes(`${userOperator}`)) {
                    arrayForNum2.splice(-1, 1);
                    return display.textContent = arrayForNum2.join('');
                }
                userNum2 = parseFloat(display.textContent);
                displayValue = operate(userOperator, userNum1, userNum2);
            };
            
            if (userOperator == '%' && isNaN(userNum2)
                || userOperator == '/' && isNaN(userNum2)) { 
                display.textContent = 'ERROR'
                displayValue = undefined;
                userOperator = undefined;
                break;
            }
            if (isNaN(userNum2) || isNaN(userNum1)) displayValue = 0;
            
            displayValue % 1 == 0 ? display.textContent = displayValue : display.textContent = displayValue.toFixed(2);
            
            userNum1 = 0;
            userNum2 = 0;
            break;

        case '+':
            if (userOperator != undefined) {

                // to allow operator at the start
                if (isNaN(userNum1)) {
                    let arr = display.textContent.split(`${userOperator}`);
                    arr.splice(-2, 1);
                    userNum1 = arr.join('');
                }
            }

            if (displayValue == undefined && userNum1 != undefined && userNum2 != undefined) {
                displayValue = operate(userOperator, userNum1, userNum2);
            }

            if (displayValue != undefined && !isNaN(userNum2)) {
                displayValue % 1 == 0 ? display.textContent = `${displayValue}${userOperator}` : display.textContent = `${displayValue.toFixed(2)}${userOperator}`;
            };

           
           
            userNum1 = parseFloat(display.textContent);
           

        
            userOperator = '+';
           

            break;

        case '-':
            
            if (userOperator != undefined) {

                // to allow operator at the start
                if (isNaN(userNum1)) {
                    let arr = display.textContent.split(`${userOperator}`);
                    arr.splice(-2, 1);
                    userNum1 = arr.join('');
                }
            }

            userOperator = '-';
            if (displayValue == undefined && userNum1 != undefined && userNum2 != undefined) {
                displayValue = operate(userOperator, userNum1, userNum2);
            }
            
            if (displayValue != undefined && !isNaN(userNum2)) {
                displayValue % 1 == 0 ? display.textContent = `${displayValue}${userOperator}` : display.textContent = `${displayValue.toFixed(2)}${userOperator}`;
            };
            userNum1 = parseFloat(display.textContent);
            
            

            break;

        case '%':

          

            if (userOperator != undefined) {

                // to allow operator at the start
                if (isNaN(userNum1)) {
                    let arr = display.textContent.split(`${userOperator}`);
                    arr.splice(-2, 1);
                    userNum1 = arr.join('');
                }
            }

            if (displayValue == undefined && userNum1 != undefined && userNum2 != undefined) {
                displayValue = operate(userOperator, userNum1, userNum2);
            }

            if (displayValue != undefined && !isNaN(userNum2)) {
                displayValue % 1 == 0 ? display.textContent = `${displayValue}${userOperator}` : display.textContent = `${displayValue.toFixed(2)}${userOperator}`;
            };
    
            userNum1 = parseFloat(display.textContent);
                
            userOperator = '%';
            break;

        case '*':

            if (userOperator != undefined) {

                // to allow operator at the start
                if (isNaN(userNum1)) {
                    let arr = display.textContent.split(`${userOperator}`);
                    arr.splice(-2, 1);
                    userNum1 = arr.join('');
                }
            }

            if (displayValue == undefined && userNum1 != undefined && userNum2 != undefined) {
                displayValue = operate(userOperator, userNum1, userNum2);
            }

            if (displayValue != undefined && !isNaN(userNum2)) {
                displayValue % 1 == 0 ? display.textContent = `${displayValue}${userOperator}` : display.textContent = `${displayValue.toFixed(2)}${userOperator}`;
            };
    
            userNum1 = parseFloat(display.textContent);
    
                
            userOperator = '*';
            break;

        case '/':

            if (userOperator != undefined) {

                // to allow operator at the start
                if (isNaN(userNum1)) {
                    let arr = display.textContent.split(`${userOperator}`);
                    arr.splice(-2, 1);
                    userNum1 = arr.join('');
                }
            }

            if (displayValue == undefined && userNum1 != undefined && userNum2 != undefined) {
                displayValue = operate(userOperator, userNum1, userNum2);
            }

            if (displayValue != undefined && !isNaN(userNum2)) {
                displayValue % 1 == 0 ? display.textContent = `${displayValue}${userOperator}` : display.textContent = `${displayValue.toFixed(2)}${userOperator}`;
            };
    
            userNum1 = parseFloat(display.textContent);
    
                
            userOperator = '/';
            break;

        case '.':
            let arrayForDot = display.textContent.split('');
            let findIndex1 = arrayForDot.indexOf('.');
            let findIndex2 = arrayForDot.lastIndexOf('.');


            if (findIndex1 != findIndex2) {
                arrayForDot.splice(-1, 1);
                display.textContent = arrayForDot.join('');
            };
            break;
            
        default:

            // erases the display text when typing a number after selecting an operator 
            let arrayForOperator = display.textContent.split('');
            if (arrayForOperator.includes('E')) display.textContent = arrayForOperator.splice(1, 0)
            if (arrayForOperator.includes('+')
                || arrayForOperator.includes('-')
                || arrayForOperator.includes('*')
                || arrayForOperator.includes('%')
                || arrayForOperator.includes('/')) {
                display.textContent = arrayForOperator.pop();
            };
            
            if (userNum1 != undefined) {
                userNum2 = parseFloat(display.textContent)
            }
            
            

            
    };

    // log('display value: ' + displayValue);
    // log('userOperator: ' + userOperator);
    // log('usernum1: ' + userNum1)
    // log('usernum2: ' + userNum2)
}

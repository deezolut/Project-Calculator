const log = console.log;

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


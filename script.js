const log = console.log

function addition(array) {
    return array.reduce((total, num) => {
        total += num;
        return total;
    }, 0)
}


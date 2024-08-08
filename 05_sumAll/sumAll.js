const sumAll = function (start, end) {
    let sum = 0;
    let startNumber = start;
    let endNumber = end;

    // check if number is positive && int
    if (!(Number.isInteger(start) &&
        Number.isInteger(end))) {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    }

    if (startNumber > endNumber) {
        startNumber = end;
        endNumber = start;
    }

    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const sumAll = function (number, arrLength) {
    let sum = 0;

    if (typeof number != "number" || typeof arrLength != "number") return "ERROR";
    else if (number < 0 || arrLength < 0) return "ERROR";
    else if (number < arrLength) {
        for (i = number; i <= arrLength; i++) {
            sum += i;
        }
    }
    else {
        for (i = arrLength; i <= number; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const leapYears = function (year) {
    let result = false;
    if (typeof year == "number" && year > 0 && year % 4 == 0 && year % 100 || year % 400 == 0) {
        result = true;
        return result;
    }
    else {
        return result;
    }
};

// Do not edit below this line
module.exports = leapYears;

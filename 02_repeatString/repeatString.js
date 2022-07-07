const repeatString = function (string, number) {
    if (number < 0) {
        return "ERROR";
    }
    else {
        for (i = 0, stringOutput = ""; i < number; i++) {
            stringOutput += string;
        }
        return stringOutput;
    }

};

// Do not edit below this line
module.exports = repeatString;

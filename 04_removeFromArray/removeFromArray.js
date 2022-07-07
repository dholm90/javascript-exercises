const removeFromArray = function (array, ...remove) {


    return array.filter(args => !remove.includes(args));


};

// Do not edit below this line
module.exports = removeFromArray;

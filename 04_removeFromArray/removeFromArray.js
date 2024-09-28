const removeFromArray = function() {
    let arrayTest = arguments[0]
    let word = arguments[1]
    let index = arrayTest.indexOf(word);
    arrayTest.splice(index, 1)

    return arrayTest

};

// Do not edit below this line
module.exports = removeFromArray;

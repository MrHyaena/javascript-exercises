const removeFromArray = function() {
    let arrayTest = arguments[0]
    let word = arguments[1]
    let argLength = arguments.length - 1

    for (let i = 0; i < argLength; i++) {

        let index = arrayTest.indexOf(arguments[i + 1]);
        arrayTest.splice(index, 1)
    }

    return arrayTest

};

// Do not edit below this line
module.exports = removeFromArray;

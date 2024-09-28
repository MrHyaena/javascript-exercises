let array =

function bug() {
    let originalArray = arguments[0]
    let argLength = arguments.length - 1

    let arrayTest = originalArray.filter((value, id) => originalArray.indexOf(value) === id)

    for (let i = 0; i < argLength; i++) {

        let index = arrayTest.indexOf(arguments[i + 1]);

        if (index > 0) {
        arrayTest.splice(index, 1)
        }
    }
    
    return arrayTest
};

bug([1, 2, 3, 4], 1, 2, 3, 4)

console.log(arrayTest)
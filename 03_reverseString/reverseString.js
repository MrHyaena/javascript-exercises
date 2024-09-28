const reverseString = function(word, char) {
    const splitArray = word.split(""); 
    const reversedArray = splitArray.toReversed();

    let reversedWord = reversedArray.join("");

    return reversedWord
};

// Do not edit below this line
module.exports = reverseString;

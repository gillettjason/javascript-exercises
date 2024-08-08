const reverseString = function (string) {
    let reversedWord = [];

    for (let i = 0; i < string.length; i++) {
        reversedWord.unshift(string[i]);
    }
    return reversedWord.join("")
};

// Do not edit below this line
module.exports = reverseString;

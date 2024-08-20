const reverseString = function(str) {
    let outputStr = "";
    for (i = str.length-1; i >= 0; i--) {
        outputStr += str[i];
    }
    return outputStr;
};

console.log(reverseString("Hello"));

// Do not edit below this line
module.exports = reverseString;

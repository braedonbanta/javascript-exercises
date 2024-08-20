const repeatString = function(str, numTimes) {
    if (numTimes < 0) {
        return "ERROR";
    }
    let outputStr = "";
    for (numTimes; numTimes > 0; numTimes--) {
        outputStr += str;
    }
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;

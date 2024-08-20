const sumAll = function(startNum, endNum) {
    if (startNum < 0 || endNum < 0) {
        return "ERROR";
    } else if (typeof(startNum) != typeof(1) || typeof(endNum) != typeof(1)) {
        return "ERROR";
    } else if (parseInt(startNum) != startNum || parseInt(endNum) != endNum) {
        return "ERROR";
    }

    let total = 0;
    if (startNum < endNum) {
    for (i = startNum; i <= endNum; i++) {
        total += i;
    }
} else {
    for(i = endNum; i <= startNum; i++) {
        total += i;
    }
}
    return total;
};

// Do not edit below this line
module.exports = sumAll;

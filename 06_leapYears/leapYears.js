const leapYears = function(year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true 
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;


// year must be % 4 = 0
// year can not be % 100 = 0 unless % 400 = 0
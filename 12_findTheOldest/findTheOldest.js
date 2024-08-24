const findTheOldest = function(personList) {
    // map, sort, filter, reduce
    const firstPerson = personList[0];
    return personList.reduce((currentOldest, currentPerson) => {
        let currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        if (currentPersonAge > currentOldest) {
            return currentPerson;
        }
    }, 0);
};

// Do not edit below this line
module.exports = findTheOldest;

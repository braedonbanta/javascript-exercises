const removeFromArray = function(array, ...args) {
    console.log(args);
    let outputArray = [...array]
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < args.length; j++) {
            console.log(array[i], args[j], (array[i]==args[j]));
            if (array[i] === args[j]) {
                outputArray.splice(outputArray.indexOf(array[i]), 1);
                console.log("new array", outputArray);
            }
        }
    }
    return outputArray;
}

// Do not edit below this line
module.exports = removeFromArray;

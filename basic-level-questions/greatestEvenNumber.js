const checkForNonIntegerInArray = (arr) => {
    arr.forEach((ele) => {
        if(typeof(ele) !== "number")
            return true;
    })
    return false;
}

const greatestEvenNumber = (arr) => {
    if(checkForNonIntegerInArray(arr))
        return -1;
    arr = arr.filter(it => it % 2 === 0);
    if(arr.length === 0)
        return -1;
    return Math.max(...arr);
}

function largestEvenNumber(arr) {
    if(checkForNonIntegerInArray(arr))
        return -1;
    arr = arr.filter(function (it) { return it % 2 === 0 });
    if(arr.length === 0)
        return -1;
    return Math.max(...arr);
}

module.exports = { greatestEvenNumber, largestEvenNumber };

// console.log(greatestEvenNumber([1, 3, 5, 7]));
// console.log(largestEvenNumber([1, 2, 3, 4, 5]));
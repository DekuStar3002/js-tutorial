const greatestEvenNumber = (arr) => {
    arr = arr.filter(it => it % 2 === 0);
    if(arr.length === 0)
        return -1;
    return Math.max(...arr);
}

function largestEvenNumber(arr) {
    arr = arr.filter(function (it) { return it % 2 === 0 });
    if(arr.length === 0)
        return -1;
    return Math.max(...arr);
}

console.log(greatestEvenNumber([1, 3, 5, 7]));
console.log(largestEvenNumber([1, 2, 3, 4, 5]));
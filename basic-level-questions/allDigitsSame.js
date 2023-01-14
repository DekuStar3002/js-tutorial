const isAllDigitsSame = number => {
    const numberString = number.toString();
    const firstChar = numberString.charAt(0);
    for(let head = 0, tail = numberString.length - 1; head < tail; ++head, --tail)
        if(firstChar !== numberString.charAt(head) || firstChar !== numberString.charAt(tail))
            return false;
    return true
}

function allDigitsSame(number) {
    const numberString = number.toString();
    const firstChar = numberString.charAt(0);
    for(let head = 0, tail = numberString.length - 1; head < tail; ++head, --tail)
        if(firstChar !== numberString.charAt(head) || firstChar !== numberString.charAt(tail))
            return false;
    return true
}

console.log(`Is all digit same?: ${isAllDigitsSame(22)}`);
console.log(`Is all digit same?: ${allDigitsSame(23)}`);
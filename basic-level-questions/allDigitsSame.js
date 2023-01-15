const numberCheckArray = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
const isAllDigitsSame = number => {
    const numberString = number.toString();
    if(numberString.length === 0)
        return false;
    const firstChar = numberString.charAt(0);
    for(let head = 0, tail = numberString.length - 1; head < tail; ++head, --tail){
        if(numberCheckArray.includes(numberString.charAt(head)) && numberCheckArray.includes(numberString.charAt(tail))) {
            if(firstChar !== numberString.charAt(head) || firstChar !== numberString.charAt(tail))
                return false;
        } else {
            return false;
        }
    }
    return true;
}

function allDigitsSame(number) {
    const numberString = number.toString();
    if(numberString.length === 0)
        return false;
    const firstChar = numberString.charAt(0);
    for(let head = 0, tail = numberString.length - 1; head < tail; ++head, --tail){
        if(numberCheckArray.includes(numberString.charAt(head)) && numberCheckArray.includes(numberString.charAt(tail))) {
            if(firstChar !== numberString.charAt(head) || firstChar !== numberString.charAt(tail))
                return false;
        } else {
            return false;
        }
    }
    return true;
}

// console.log(`Is all digit same?: ${isAllDigitsSame(22)}`);
// console.log(`Is all digit same?: ${allDigitsSame(23)}`);

module.exports = { isAllDigitsSame, allDigitsSame };
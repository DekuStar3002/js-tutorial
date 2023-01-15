const findLeapYear = (year) => {
    return year % 400 === 0 ? 
            true : year % 100 === 0 ? 
                false : year % 4 === 0 ? 
                    true : false;
}

function isLeapYear(year) {
    return year % 400 === 0 ? 
            true : year % 100 === 0 ? 
                false : year % 4 === 0 ? 
                    true : false;
}

console.log(findLeapYear(2000));
console.log(isLeapYear(1800));
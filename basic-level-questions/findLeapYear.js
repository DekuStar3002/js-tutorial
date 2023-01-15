const findLeapYear = (year) => {
    if(typeof(year) !== "number")
        return false;
    let numberString = year.toString();
    if(numberString.includes("."))
        return false;
    return year % 400 === 0 ? 
            true : year % 100 === 0 ? 
                false : year % 4 === 0 ? 
                    true : false;
}

function isLeapYear(year) {
    if(typeof(year) !== "number")
        return false;
    return year % 400 === 0 ? 
            true : year % 100 === 0 ? 
                false : year % 4 === 0 ? 
                    true : false;
}

module.exports = { findLeapYear, isLeapYear };

// console.log(findLeapYear(2000));
// console.log(isLeapYear(1800));
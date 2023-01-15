const findSubstringInString = (inputStr) => {
    if(typeof(inputStr) !== "string")
        return false;
    if(inputStr.length < 6)
        return false;
    return inputStr.includes("Script");
}

function isSubstringInString(inputStr) {
    if(typeof(inputStr) !== "string")
        return false;
    if(inputStr.length < 6)
        return false;
    return inputStr.includes("Script");
}

module.exports = { findSubstringInString, isSubstringInString };

// console.log(findSubstringInString("javaScript"));
// console.log(isSubstringInString("Javascript"));

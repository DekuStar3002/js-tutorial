const findSubstringInString = (inputStr) => {
    if(inputStr.length < 6)
        return false;
    return inputStr.includes("Script");
}

function isSubstringInString(inputStr) {
    if(inputStr.length < 6)
        return false;
    return inputStr.includes("Script");
}

console.log(findSubstringInString("javaScript"));
console.log(isSubstringInString("Javascript"));

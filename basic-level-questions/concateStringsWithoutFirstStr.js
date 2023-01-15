const concateStringWithoutFirstChar = (strArray) => {
    return strArray[0].substring(1) + strArray[1].substring(1);
}
function addStringWithoutFirstChar(strArray) {
    return strArray[0].substring(1) + strArray[1].substring(1);
}
console.log(concateStringWithoutFirstChar(["code", "academy"]));
console.log(addStringWithoutFirstChar(["code", "academy"]));
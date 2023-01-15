const findLongestString = (strArray) => {
    let longestStr = "";
    for(let i = 0; i < strArray.length; ++i) {
        if(longestStr.length < strArray[i].length)
            longestStr = strArray[i];
    }
    return longestStr;
}

function searchLongestString(strArray) {
    let longestStr = "";
    for(let i = 0; i < strArray.length; ++i) {
        if(longestStr.length < strArray[i].length)
            longestStr = strArray[i];
    }
    return longestStr;
}

console.log(findLongestString(["we", "love", "code", "academy"]));
console.log(searchLongestString(["we", "love", "code", "academy"]));
const moveCharToNextChar = (str) => {
    let newStr = "";
    for(let i = 0; i < str.length ; ++i) {
        if(str[i] === 'z')
            newStr += 'a';
        else if(str[i] === 'Z')
            newStr += 'A';
        else 
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
    }
    return newStr;
}

function changeCharToNextChar(str) {
    let newStr = "";
    for(let i = 0; i < str.length ; ++i) {
        if(str[i] === 'z')
            newStr += 'a';
        else if(str[i] === 'Z')
            newStr += 'A';
        else 
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
    }
    return newStr;
}

console.log(moveCharToNextChar("abcdez"));
console.log(changeCharToNextChar("abcdez"));
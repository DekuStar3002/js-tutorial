const checkVowel = (char) => {
    char = char.toLowerCase();
    return (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') ? 1 : 0;
}

const countVowel = (str) => {
    if(typeof(str) !== "string")
        return -1;
    if(str.length  === 0)
        return -1;
    let totalCount = 0;
    for(let i = 0; i < str.length; ++i) {
        totalCount += checkVowel(str[i]);
    }
    return totalCount;
}

function totalVowelInString(str) {
    if(typeof(str) !== "string")
        return -1;
    if(str.length  === 0)
        return -1;
    let totalCount = 0;
    for(let i = 0; i < str.length; ++i) {
        totalCount += checkVowel(str[i]);
    }
    return totalCount;
} 

module.exports = { countVowel, totalVowelInString };

// console.log(countVowel("codeacademy"));
// console.log(totalVowelInString("codeacademy"));
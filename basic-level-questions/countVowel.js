const checkVowel = (char) => {
    char = char.toLowerCase();
    return (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') ? 1 : 0;
}

const countVowel = (str) => {
    let totalCount = 0;
    for(let i = 0; i < str.length; ++i) {
        totalCount += checkVowel(str[i]);
    }
    return totalCount;
}

function totalVowelInString(str) {
    let totalCount = 0;
    for(let i = 0; i < str.length; ++i) {
        totalCount += checkVowel(str[i]);
    }
    return totalCount;
} 

console.log(countVowel("codeacademy"));
console.log(totalVowelInString("codeacademy"));
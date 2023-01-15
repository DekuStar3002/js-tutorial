const interchangeOfCases = (str) => {
    if(typeof(str) !== "string" || str.length === 0)
        return "Expects a string";
    let newStr = "";
    for(let i = 0; i < str.length; ++i) {
        let char = str.charAt(i);
        if(char <= 'a' && char >= 'z' && char <= 'A' && char >= 'Z'){
            newStr += char;
            continue;
        }
        if(char === char.toUpperCase()){
            newStr += str.charAt(i).toLowerCase();
        } else {
            newStr += str.charAt(i).toUpperCase();
        }
    }
    return newStr;
}

function changeOfCases(str){
    if(typeof(str) !== "string" || str.length === 0)
        return "Expects a string";
    let newStr = "";
    for(let i = 0; i < str.length; ++i) {
        let char = str.charAt(i);
        if(char <= 'a' && char >= 'z' && char <= 'A' && char >= 'Z'){
            newStr += char;
            continue;
        }
        if(char === char.toUpperCase()){
            newStr += str.charAt(i).toLowerCase();
        } else {
            newStr += str.charAt(i).toUpperCase();
        }
    }
    return newStr;
}

module.exports = { interchangeOfCases, changeOfCases };

// console.log(interchangeOfCases("MeRRy hAD a LITTle lAMp"));
// console.log(changeOfCases("mErrY Had A littLE LamP"));
const interchangeOfCases = (str) => {
    let newStr = "";
    for(let i = 0; i < str.length; ++i) {
        let char = str.charAt(i);
        if(char === char.toUpperCase()){
            newStr += str.charAt(i).toLowerCase();
        } else {
            newStr += str.charAt(i).toUpperCase();
        }
    }
    return newStr;
}

function changeOfCases(str){
    let newStr = "";
    for(let i = 0; i < str.length; ++i) {
        let char = str.charAt(i);
        if(char === char.toUpperCase()){
            newStr += str.charAt(i).toLowerCase();
        } else {
            newStr += str.charAt(i).toUpperCase();
        }
    }
    return newStr;
}

console.log(interchangeOfCases("MeRRy hAD a LITTle lAMp"));
console.log(changeOfCases("mErrY Had A littLE LamP"));
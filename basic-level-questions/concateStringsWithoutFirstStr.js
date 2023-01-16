const concateStringWithoutFirstChar = (strArray) => {
  if(strArray.length <= 1)
    return 'Expected atleast 2 elements';
  if(typeof(strArray[0]) !== 'string' || typeof(strArray[1]) !== 'string'){
    return 'Expected an array of string';
  }
  return strArray[0].substring(1) + strArray[1].substring(1);
};
function addStringWithoutFirstChar(strArray) {
  if(strArray.length <= 1)
    return 'Expected atleast 2 elements';
  if(typeof(strArray[0]) !== 'string' || typeof(strArray[1]) !== 'string'){
    return 'Expected an array of string';
  }
  return strArray[0].substring(1) + strArray[1].substring(1);
}

module.exports = { concateStringWithoutFirstChar, addStringWithoutFirstChar };
// console.log(concateStringWithoutFirstChar(["code", "academy"]));
// console.log(addStringWithoutFirstChar(["code", "academy"]));
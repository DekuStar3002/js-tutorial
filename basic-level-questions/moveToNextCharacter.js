const moveCharToNextChar = (str) => {
  if(typeof(str) !== 'string' || str.length === 0)
    return 'Expected a string';
  let newStr = '';
  for(let i = 0; i < str.length ; ++i) {
    if(str[i] === 'z')
      newStr += 'a';
    else if(str[i] === 'Z')
      newStr += 'A';
    else if(str[i] >= '0' && str[i] <= '9')
      newStr += str[i];
    else 
      newStr += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return newStr;
};

function changeCharToNextChar(str) {
  if(typeof(str) !== 'string' || str.length === 0)
    return 'Expected a string';
  let newStr = '';
  for(let i = 0; i < str.length ; ++i) {
    if(str[i] === 'z')
      newStr += 'a';
    else if(str[i] === 'Z')
      newStr += 'A';
    else if(str[i] >= '0' && str[i] <= '9')
      newStr += str[i];
    else 
      newStr += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return newStr;
}

module.exports = { moveCharToNextChar, changeCharToNextChar };

// console.log(moveCharToNextChar("abcdez"));
// console.log(changeCharToNextChar("abcdez"));
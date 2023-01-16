const findLongestString = (strArray) => {
  if(strArray.length === 0)
    return 'Expected atleast 1 element';
  let longestStr = '';
  for(let i = 0; i < strArray.length; ++i) {
    if(typeof(strArray[i]) !== 'string')
      return 'error: received element was not a string';
    if(longestStr.length < strArray[i].length)
      longestStr = strArray[i];
  }
  return longestStr;
};

function searchLongestString(strArray) {
  if(strArray.length === 0)
    return 'Expected atleast 1 element';
  let longestStr = '';
  for(let i = 0; i < strArray.length; ++i) {
    if(typeof(strArray[i]) !== 'string')
      return 'error: received element was not a string';
    if(longestStr.length < strArray[i].length)
      longestStr = strArray[i];
  }
  return longestStr;
}

module.exports = { findLongestString, searchLongestString };

// console.log(findLongestString(["we", "love", "code", "academy"]));
// console.log(searchLongestString(["we", "love", "code", "academy"]));
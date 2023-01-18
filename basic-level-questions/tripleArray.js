const tripleArrayElements = (numbers) => {
  if(!Array.isArray(numbers))
    throw new TypeError('error: expected an number array');
  if(numbers.length === 0)
    throw new TypeError('error: expected an array of atleast one element');
  numbers = numbers.map(number => number * 3);
  return numbers.filter(number => number % 2 === 0);
};

const tripleArrayElementsUsingReduce = (numbers) => {
  if(!Array.isArray(numbers))
    throw new TypeError('error: expected an number array');
  if(numbers.length === 0)
    throw new TypeError('error: expected an array of atleast one element');
  return numbers.reduce((modifiedArray, currentValue) => 
    (currentValue * 3) % 2 === 0 ? [ ...modifiedArray, currentValue * 3 ] : modifiedArray
  , []);
};

module.exports = { tripleArrayElements, tripleArrayElementsUsingReduce };
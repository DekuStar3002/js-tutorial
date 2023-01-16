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
  return numbers.reduce((accumulator, currentValue) => 
    (currentValue * 3) % 2 === 0 ? [ ...accumulator, currentValue * 3 ] : accumulator
  , []);
};

console.log(tripleArrayElementsUsingReduce([1,2,3,4,5,6]));

module.exports = { tripleArrayElements, tripleArrayElementsUsingReduce };
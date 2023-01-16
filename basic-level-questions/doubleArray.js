
const doubleElementsOfArray = (numbers) => {
  if(!Array.isArray(numbers))
    throw new Error('error: input argument should be an array');
  if(numbers.length === 0)
    return [];
  return numbers.map(number => number * 2);
};

module.exports = { doubleElementsOfArray };

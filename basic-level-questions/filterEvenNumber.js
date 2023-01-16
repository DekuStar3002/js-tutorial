const filterEvenNumber = (numbers) => {
  if(!Array.isArray(numbers))
    throw new TypeError('error: expexted input is an array');
  if(numbers.length === 0)
    throw new TypeError('error: expexted input is an array of atleast 1 element');
  return numbers.filter((number) => number % 2 === 0);
};
module.exports = { filterEvenNumber };
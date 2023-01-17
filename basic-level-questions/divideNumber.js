const division = (num1, num2) =>  { 
  if(!Number.isFinite(num1) || !Number.isFinite(num2))
    throw new TypeError('Argumnet shuold be of type number');
  if(num2 === 0) 
    throw new TypeError('Denominator can\'t be 0'); 
  return num1 / num2; 
};

module.exports = { division };
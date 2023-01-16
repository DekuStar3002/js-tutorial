const { isAllDigitsSame, allDigitsSame } = require('./allDigitsSame');

test('when given a number of same digits then should return true else false', 
  () => { 
    expect(isAllDigitsSame(44)).toBe(true);
  }
);

test('when given a number of different digits then return false', 
  () => { 
    expect(isAllDigitsSame(42)).toBe(false);
  }
);

test('when given not a number then should return false', 
  () => { 
    expect(isAllDigitsSame('absds')).toBe(false);
  }
);

test('when given a empty string then should return false', 
  () => { 
    expect(isAllDigitsSame('')).toBe(false);
  }
);



test('when give number of same digits then should return true else false', 
  () => { 
    expect(allDigitsSame(44)).toBe(true);
  }
);

test('when give number of different digits then return false', 
  () => { 
    expect(allDigitsSame(42)).toBe(false);
  }
);

test('when give not a number then should return false', 
  () => { 
    expect(allDigitsSame('absds')).toBe(false);
  }
);

test('when given a empty string then should return false', 
  () => { 
    expect(allDigitsSame('')).toBe(false);
  }
);
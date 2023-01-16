const { greatestEvenNumber, largestEvenNumber } = require('./greatestEvenNumber');

test('when given a array of number then return largest even number', 
  () => { 
    expect(greatestEvenNumber([1, 2, 3, 4, 5])).toBe(4);
  }
);

test('when given a array of odd number then return -1', 
  () => { 
    expect(greatestEvenNumber([1, 3, 5, 7])).toBe(-1);
  }
);

test('when given a empty array then return -1', 
  () => { 
    expect(greatestEvenNumber([])).toBe(-1);
  }
);

test('when given a array of number then return largest even number', 
  () => { 
    expect(greatestEvenNumber(['1', 3, 5, 7])).toBe(-1);
  }
);

test('when given a array of number then return largest even number', 
  () => { 
    expect(largestEvenNumber([1, 2, 3, 4, 5])).toBe(4);
  }
);

test('when given a array of odd number then return -1', 
  () => { 
    expect(largestEvenNumber([1, 3, 5, 7])).toBe(-1);
  }
);

test('when given a empty array then return -1', 
  () => { 
    expect(largestEvenNumber([])).toBe(-1);
  }
);

test('when given a array of number then return largest even number', 
  () => { 
    expect(largestEvenNumber(['1', 3, 5, 7])).toBe(-1);
  }
);
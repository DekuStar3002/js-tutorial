const { findLongestString, searchLongestString } = require('./findLongestString');

test('when given an array of strings then return longest string', 
  () => { 
    expect(findLongestString(['we', 'love', 'code', 'academy'])).toBe('academy');
  }
);

test('when given an empty array return error message', 
  () => { 
    expect(findLongestString([])).toBe('Expected atleast 1 element');
  }
);

test('when given an array of non strings then return longest string', 
  () => { 
    expect(findLongestString([1, 1.2, 'code', 'academy'])).toBe('error: received element was not a string');
  }
);

test('when given an array of strings then return longest string', 
  () => { 
    expect(searchLongestString(['we', 'love', 'code', 'academy'])).toBe('academy');
  }
);

test('when given an empty array return error message', 
  () => { 
    expect(searchLongestString([])).toBe('Expected atleast 1 element');
  }
);

test('when given an array of non strings then return longest string', 
  () => { 
    expect(searchLongestString([1, 1.2, 'code', 'academy'])).toBe('error: received element was not a string');
  }
);



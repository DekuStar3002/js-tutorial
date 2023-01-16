const { findLeapYear, isLeapYear } = require('./findLeapYear');

test('when given an leap year then return true', 
  () => { 
    expect(findLeapYear(2004)).toBe(true);
  }
);

test('when given an non leap year then return false', 
  () => { 
    expect(findLeapYear(2001)).toBe(false);
  }
);

test('when given an non integer then return false', 
  () => { 
    expect(findLeapYear('2004')).toBe(false);
  }
);

test('when given an floating number then return false', 
  () => { 
    expect(findLeapYear(2004.2016)).toBe(false);
  }
);

test('when given an leap year then return true', 
  () => { 
    expect(isLeapYear(2004)).toBe(true);
  }
);

test('when given an non leap year then return false', 
  () => { 
    expect(isLeapYear(2001)).toBe(false);
  }
);

test('when given an non integer then return false', 
  () => { 
    expect(isLeapYear('2004')).toBe(false);
  }
);

test('when given an floating number then return false', 
  () => { 
    expect(isLeapYear(2004.2016)).toBe(false);
  }
);

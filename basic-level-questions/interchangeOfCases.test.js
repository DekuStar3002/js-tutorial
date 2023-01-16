const { interchangeOfCases, changeOfCases } = require('./interchangeOfCases');

test('when given a string then return changed string', 
  () => { 
    expect(interchangeOfCases('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
  }
);

test('when given a alphanumeric string then return changed string', 
  () => { 
    expect(interchangeOfCases('MeRRy hAD a LITTle lAMp 12345')).toBe('mErrY Had A littLE LamP 12345');
  }
);

test('when given a empty string then return error message', 
  () => { 
    expect(interchangeOfCases('')).toBe('Expects a string');
  }
);

test('when given a non string then return changed string', 
  () => { 
    expect(interchangeOfCases(1231)).toBe('Expects a string');
  }
);

test('when given a string then return changed string', 
  () => { 
    expect(changeOfCases('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
  }
);

test('when given a alphanumeric string then return changed string', 
  () => { 
    expect(changeOfCases('MeRRy hAD a LITTle lAMp 12345')).toBe('mErrY Had A littLE LamP 12345');
  }
);

test('when given a empty string then return error message', 
  () => { 
    expect(changeOfCases('')).toBe('Expects a string');
  }
);

test('when given a non string then return changed string', 
  () => { 
    expect(changeOfCases(1231)).toBe('Expects a string');
  }
);
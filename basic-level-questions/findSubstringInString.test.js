const { findSubstringInString, isSubstringInString } = require("./findSubstringInString");

test('when given a string which contains \'Script\' then return true', 
    () => { 
        expect(findSubstringInString("javaScript")).toBe(true);
    }
);

test('when given a string which doesnot contains \'Script\' then return false', 
    () => { 
        expect(findSubstringInString("javaScan")).toBe(false);
    }
);

test('when given a string of length less than 6 then return false', 
    () => { 
        expect(findSubstringInString("java")).toBe(false);
    }
);

test('when given a non string then return false', 
    () => { 
        expect(findSubstringInString(123456)).toBe(false);
    }
);

test('when given a string which contains \'Script\' then return true', 
    () => { 
        expect(isSubstringInString("javaScript")).toBe(true);
    }
);

test('when given a string which doesnot contains \'Script\' then return false', 
    () => { 
        expect(isSubstringInString("javaScan")).toBe(false);
    }
);

test('when given a string of length less than 6 then return false', 
    () => { 
        expect(isSubstringInString("java")).toBe(false);
    }
);

test('when given a non string then return false', 
    () => { 
        expect(isSubstringInString(123456)).toBe(false);
    }
);
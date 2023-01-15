const { concateStringWithoutFirstChar, addStringWithoutFirstChar } = require("./concateStringsWithoutFirstStr");

test('when given an array of strings then return concatenate the string without their first characters', 
    () => { 
        expect(concateStringWithoutFirstChar(["code", "academy"])).toBe("odecademy");
    }
);

test('when given an empty array then return error message', 
    () => { 
        expect(concateStringWithoutFirstChar([])).toBe("Expected atleast 2 elements");
    }
);

test('when given an array of single string then return error message', 
    () => { 
        expect(concateStringWithoutFirstChar(["code"])).toBe("Expected atleast 2 elements");
    }
);

test('when given an array of non strings then return error message', 
    () => { 
        expect(concateStringWithoutFirstChar([ 1, 2 ])).toBe("Expected an array of string");
    }
);

test('when given an array of strings then return concatenate the string without their first characters', 
    () => { 
        expect(addStringWithoutFirstChar(["code", "academy"])).toBe("odecademy");
    }
);

test('when given an empty array then return error message', 
    () => { 
        expect(addStringWithoutFirstChar([])).toBe("Expected atleast 2 elements");
    }
);

test('when given an array of single string then return error message', 
    () => { 
        expect(addStringWithoutFirstChar(["code"])).toBe("Expected atleast 2 elements");
    }
);

test('when given an array of non strings then return error message', 
    () => { 
        expect(addStringWithoutFirstChar([ 1, 2 ])).toBe("Expected an array of string");
    }
);
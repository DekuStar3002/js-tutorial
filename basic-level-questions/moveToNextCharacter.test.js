const { moveCharToNextChar, changeCharToNextChar } = require("./moveToNextCharacter");

test('when given a string then return changed string', 
    () => { 
        expect(moveCharToNextChar("abcdef")).toBe("bcdefg");
    }
);

test('when given a string then return error message', 
    () => { 
        expect(moveCharToNextChar("")).toBe("Expected a string");
    }
);

test('when given a non string then return error message', 
    () => { 
        expect(moveCharToNextChar(1212)).toBe("Expected a string");
    }
);

test('when given a non string then return error message', 
    () => { 
        expect(moveCharToNextChar("abcdef123")).toBe("bcdefg123");
    }
);

test('when given a string then return changed string', 
    () => { 
        expect(changeCharToNextChar("abcdef")).toBe("bcdefg");
    }
);

test('when given a string then return error message', 
    () => { 
        expect(changeCharToNextChar("")).toBe("Expected a string");
    }
);

test('when given a non string then return error message', 
    () => { 
        expect(changeCharToNextChar(1212)).toBe("Expected a string");
    }
);

test('when given a non string then return error message', 
    () => { 
        expect(changeCharToNextChar("abcdef123")).toBe("bcdefg123");
    }
);
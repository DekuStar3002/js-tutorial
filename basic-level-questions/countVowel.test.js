const { countVowel, totalVowelInString } = require("./countVowel");

test('when given an string then return number of vowels in the word', 
    () => { 
        expect(countVowel("codeacademy")).toBe(5);
    }
);

test('when given an string with uppercase then return number of vowels in the word', 
    () => { 
        expect(countVowel("CODEACADEMY")).toBe(5);
    }
);

test('when given an empty string then return -1', 
    () => { 
        expect(countVowel("")).toBe(-1);
    }
);

test('when given an non string then return -1', 
    () => { 
        expect(countVowel(123456)).toBe(-1);
    }
);

test('when given an string then return number of vowels in the word', 
    () => { 
        expect(totalVowelInString("codeacademy")).toBe(5);
    }
);

test('when given an string with uppercase then return number of vowels in the word', 
    () => { 
        expect(totalVowelInString("CODEACADEMY")).toBe(5);
    }
);

test('when given an empty string then return -1', 
    () => { 
        expect(totalVowelInString("")).toBe(-1);
    }
);

test('when given an non string then return -1', 
    () => { 
        expect(totalVowelInString(123456)).toBe(-1);
    }
);

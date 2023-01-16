const { filterEvenNumber } = require('./filterEvenNumber');

describe('Filter Array', () => {
  describe('Filter Array to Even element array', () => {
    it('should return error when not given array', () => {
      expect(() => filterEvenNumber('Hello')).toThrow(TypeError);
    });
    it('should return modified array when given array', () => {
      const result = filterEvenNumber([ 1, 2, 3, 4, 5 ]);
      expect(result).toEqual([ 2, 4 ]);
    });
    it('should return empty array when given empty array', () => {
      expect(() => filterEvenNumber([])).toThrow(TypeError);
    });
  });
});

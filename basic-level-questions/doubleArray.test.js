const { doubleElementsOfArray } = require('./doubleArray');

describe('Double Array', () => {
  describe('Double Element of Array', () => {
    it('should return error when not given array', () => {
      expect(() => doubleElementsOfArray('Hello')).toThrow(Error);
    });
    it('should return modified array when given array', () => {
      const result = doubleElementsOfArray([ 1, 2, 3, 4, 5 ]);
      expect(result).toEqual([ 2, 4, 6, 8, 10 ]);
    });
    it('should return empty array when given empty array', () => {
      const result = doubleElementsOfArray([]);
      expect(result).toEqual([]);
    });
  });
});

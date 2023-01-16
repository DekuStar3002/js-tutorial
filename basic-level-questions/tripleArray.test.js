const { tripleArrayElements, tripleArrayElementsUsingReduce } = require('./tripleArray');

describe('Triple Array', () => {
  describe('Tripe Array and get Even element array', () => {
    it('should return modified array when given array', () => {
      const result = tripleArrayElements([ 1, 2, 3, 4, 5 ]);
      expect(result).toEqual([ 6, 12 ]);
    });
    it('should return error when not given array', () => {
      expect(() => tripleArrayElements('Hello')).toThrow(TypeError);
    });
    it('should return empty array when given empty array', () => {
      expect(() => tripleArrayElements([])).toThrow(TypeError);
    });
    it('should return modified array when given array', () => {
      const result = tripleArrayElementsUsingReduce([ 1, 2, 3, 4, 5 ]);
      expect(result).toEqual([ 6, 12 ]);
    });
    it('should return error when not given array', () => {
      expect(() => tripleArrayElementsUsingReduce('Hello')).toThrow(TypeError);
    });
    it('should return empty array when given empty array', () => {
      expect(() => tripleArrayElementsUsingReduce([])).toThrow(TypeError);
    });
  });
});

const { division } = require('./divideNumber');

describe('Divide Number', () => { 
  describe('Division', () => {
    it('should return error message when given NaN', () => {
      expect(() => division('a', 1)).toThrow(TypeError);
    }); 
    it('should return error message when given divisor zero', () => {
      expect(() => division(1, 0)).toThrow(TypeError);
    }); 
    it('should return result when given input', () => {
      expect(division(2, 1)).toEqual(2);
    }); 
  });
});

const { scoreCalculator, bestScoreFinder } = require('./bowlingUtils');

describe('Bowling Utils', () => {
  describe('Score Calculator', () => {
    it('should return score when given array', () => {
      expect(scoreCalculator([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
    });
    it('should return error when not given array', () => {
      expect(() => scoreCalculator('Socres')).toThrow(TypeError);
    });
    it('should return error when array which may contain NaN', () => {
      expect(() => scoreCalculator([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 'A'])).toThrow(TypeError);
    });
    it('should return error when array contains less than 10 element', () => {
      expect(() => scoreCalculator([ 0, 0, 0, 0, 0, 0, 0, 0, 0])).toThrow(Error);
    });
  });
  describe('Best Score Finder', () => {
    it('should return score when given array', () => {
      expect(bestScoreFinder([
        [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], 
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10 ], 
        [ 6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      ])).toEqual(90);
    });
    it('should return error when not given array', () => {
      expect(() => bestScoreFinder('Socres')).toThrow(Error);
    });
  });
});

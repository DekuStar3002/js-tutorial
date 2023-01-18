// Function to calculate the score of a single game of bowling.
const scoreCalculator = (rolls) => {
  let totalScore = 0;
  let index = 0;
  let frameNumber = 1;
  while(index < rolls.length) { 
    console.log(totalScore + " " + frameNumber + " " + index);
    if( frameNumber === 10 ) { // CASE FOR 10th FRAME
      totalScore += rolls[index];
      index += 1;
    } else {
      if ( rolls[index] === 10 ) { // CASE FOR STRIKE
        totalScore += 10;
        totalScore += index + 1 < rolls.length ? rolls[ index + 1 ] : 0;
        totalScore += index + 2 < rolls.length ? rolls[ index + 2 ] : 0;
        index += 1;
      } else if ( rolls[ index + 1 ] + rolls[ index + 2 ] === 10 ) { // CASE FOR SPARE
        totalScore += 10;
        totalScore += rolls[ index + 2 ];
        index += 2;
      }  else if ( rolls[ index + 1 ] + rolls[ index + 2 ] < 10 ) { // CASE FOR NORMAL 
        totalScore += rolls[ index ];
        totalScore += rolls[ index + 1 ];
        index += 2;
      }
      frameNumber += 1;
    }
    
  }
  return totalScore;
};

// Function to find the best score in a set of bowling games.
const bestScoreFinder = ( games ) => {
  return games.reduce((bestScore, currentGame) => {
    let gameScore = scoreCalculator(currentGame);
    return bestScore < gameScore ? gameScore : bestScore;
  }, -1);
};

module.exports = { scoreCalculator, bestScoreFinder };
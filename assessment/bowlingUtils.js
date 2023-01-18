// Function to calculate the score of a single game of bowling.
const scoreCalculator = (rolls) => {
  let totalScore = 0;
  let index = 0;
  let frameNumber = 1;
  while(index < rolls.length) { 
    console.log(totalScore + " " + frameNumber);
    if( frameNumber === 10 ) { // CASE FOR 10th FRAME
      // console.log("if");
      totalScore += rolls[index];
      index += 1;
    } else {
      // console.log("else")
      
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
  // rolls.forEach((point, index) => {
  //   if( point === 10 ) { // CASE OF STRIKE
      
  //   } 

  // });
  return totalScore;
};

// Function to find the best score in a set of bowling games.
const bestScoreFinder = ( games ) => {

}

let scores = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10 ];
console.log(scoreCalculator(scores));
// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter 1 uses an outer function-scoped variable that will reset to 0 each time the outer function is called. Counter 2 is using a global scope variable that is reset once, and each time you call the function it will not reset.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter 1 uses closure, as it's using a variable from an outer function's scope for the inner functions directions.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * The code from counter1 would be preferable if you were looking to be able to use another function to reset a function (closure) without affecting other functions that have the same variable name. Counter 2 would be preferable if you were looking to set a variable at a global scope that could be used in multiple functions.
 *  
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let score = Math.round(Math.random() + Math.random());
  return score;
}
console.log(`${inning()} points.`);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callFunction, noOfInnings){
  var home = 0;
  var away = 0;
  for(let i = 0; i < noOfInnings; i++)
  {
    var homeScore = callFunction();
    var awayScore = callFunction();
    home = home + homeScore;
    away = away + awayScore;
  }
  console.log(`Home: ${home}`);
  console.log(`Away: ${away}`);
}
finalScore(inning, 9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(callFunction1, callFunction2, noOfInnings) {
}


